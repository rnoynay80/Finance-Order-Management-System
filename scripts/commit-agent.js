#!/usr/bin/env node
const { spawnSync } = require('child_process');

function run(cmd, args, opts = {}) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', ...opts });
  if (res.error) { console.error(res.error); process.exit(1); }
  if (res.status !== 0) { process.exit(res.status); }
}

function runOutput(cmd, args) {
  const res = spawnSync(cmd, args, { encoding: 'utf8' });
  if (res.error) { console.error(res.error); process.exit(1); }
  if (res.status !== 0) { return null; }
  return res.stdout.trim();
}

const argv = process.argv.slice(2);
let message = null;
let branch = null;
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a === '-m' || a === '--message') { message = argv[i + 1]; i++; }
  else if (a === '-b' || a === '--branch') { branch = argv[i + 1]; i++; }
  else if (a === '--auto') { message = `Commit by commit-agent on ${new Date().toISOString()}`; }
}

if (!message) {
  console.error('Usage: npm run commit-agent -- -m "message" [-b branch]  or use --auto');
  process.exit(1);
}

const status = runOutput('git', ['status', '--porcelain']);
if (status === '') { console.log('No changes to commit.'); process.exit(0); }

if (!branch) {
  branch = runOutput('git', ['rev-parse', '--abbrev-ref', 'HEAD']) || 'main';
}

console.log('Staging changes...');
run('git', ['add', '-A']);
console.log('Committing...');
run('git', ['commit', '-m', message]);
console.log(`Pushing to origin/${branch}...`);
run('git', ['push', 'origin', branch]);
console.log('Done.');
