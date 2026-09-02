import { readFile } from 'node:fs/promises';

const OPENAPI_URL = 'http://localhost:5134/openapi/v1.json';

const POSTMAN_COLLECTION =
  '../../postman/FOMS-API.postman_collection.json';

type Endpoint = {
  method: string;
  path: string;
};

async function getOpenApiEndpoints(): Promise<Endpoint[]> {
  const response = await fetch(OPENAPI_URL);

  if (!response.ok) {
    throw new Error(
      `Failed to retrieve OpenAPI document. HTTP ${response.status}`
    );
  }

  const openApi = await response.json();

  const endpoints: Endpoint[] = [];

  for (const [path, pathItem] of Object.entries(openApi.paths)) {
    for (const method of Object.keys(pathItem as object)) {
      endpoints.push({
        method: method.toUpperCase(),
        path
      });
    }
  }

  return endpoints;
}

async function getPostmanEndpoints(): Promise<Endpoint[]> {
  const file = await readFile(POSTMAN_COLLECTION, 'utf-8');

  const collection = JSON.parse(file);

  const endpoints: Endpoint[] = [];

  function processItems(items: any[]) {
    for (const item of items) {
      if (item.request) {
        const method = item.request.method?.toUpperCase();

        const rawUrl = item.request.url?.raw;

        if (method && rawUrl) {
          const path = rawUrl
            .replace('{{baseUrl}}', '')
            .split('?')[0];

          endpoints.push({
            method,
            path
          });
        }
      }

      if (item.item) {
        processItems(item.item);
      }
    }
  }

  processItems(collection.item);

  return endpoints;
}

function endpointKey(endpoint: Endpoint): string {
  return `${endpoint.method} ${endpoint.path}`;
}

async function main() {
  console.log('FOMS Postman Sync');
  console.log('-----------------');
  console.log('');

  console.log('Reading OpenAPI...');

  const openApiEndpoints = await getOpenApiEndpoints();

  console.log(`Found ${openApiEndpoints.length} OpenAPI endpoints.`);
  console.log('');

  console.log('Reading Postman collection...');

    const postmanEndpoints = await getPostmanEndpoints();

  const uniquePostmanEndpoints = Array.from(
    new Map(
      postmanEndpoints.map(endpoint => [
        endpointKey(endpoint),
        endpoint
      ])
    ).values()
  );

  console.log(
    `Found ${uniquePostmanEndpoints.length} unique Postman endpoints.`
  );

  const postmanKeys = new Set(
    uniquePostmanEndpoints.map(endpointKey)
  );

  const missingFromPostman = openApiEndpoints.filter(
    endpoint => !postmanKeys.has(endpointKey(endpoint))
  );

  console.log('OpenAPI endpoints:');

  for (const endpoint of openApiEndpoints) {
    console.log(`  ${endpointKey(endpoint)}`);
  }

  console.log('');

  console.log('Postman endpoints:');

  for (const endpoint of uniquePostmanEndpoints) {
    console.log(`  ${endpointKey(endpoint)}`);
  }

  console.log('');

  console.log('Missing from Postman:');

  if (missingFromPostman.length === 0) {
    console.log('  None');
  } else {
    for (const endpoint of missingFromPostman) {
      console.log(`  ${endpointKey(endpoint)}`);
    }
  }

  console.log('');

  if (missingFromPostman.length === 0) {
    console.log('Sync status: UP TO DATE');
  } else {
    console.log(
      `Sync status: ${missingFromPostman.length} ENDPOINT(S) NEED TO BE ADDED`
    );
  }
}

main().catch(error => {
  console.error('');
  console.error('Sync failed:', error.message);
  process.exit(1);
});