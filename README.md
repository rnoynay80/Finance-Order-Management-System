# Finance Order Management System (FOMS)

This README contains the top-level project information and Quality Engineering focus for the Finance & Order Management System.

## **1. Project Overview**

Finance & Order Management System (FOMS) is a full-stack business application designed to manage finance and order-related processes within an organisation.

The system is being developed as a practical demonstration of a modern enterprise application, covering backend API development, authentication, database management, order processing, financial transactions, automated testing, security, and CI/CD.

Core business capabilities:

- User authentication and authorization
- Customer management
- Supplier management
- Product management
- Sales order management
- Purchase order management
- Invoice management
- Payment processing
- Financial account management
- Financial transactions and fund transfers
- Audit and transaction history

The project is also being developed with a strong Quality Engineering (QE) focus. Automated testing is integrated throughout the development lifecycle rather than being treated as a separate activity.

## **2. Objectives**

Application Development

- Build a realistic transaction-based business application
- Develop RESTful APIs using TypeScript and Express
- Implement secure authentication and authorization
- Design and integrate a relational database
- Implement sales and purchase order workflows
- Implement invoice and payment processing
- Implement financial transactions and fund transfers

Quality Engineering

- Build automated API tests using Playwright and TypeScript
- Implement end-to-end testing
- Validate database transactions and data integrity
- Implement functional and regression testing
- Implement security testing
- Implement performance testing
- Integrate automated quality checks into CI/CD

DevOps & Cloud

- Implement Git-based development practices
- Build a CI/CD pipeline using GitHub Actions
- Integrate automated testing into the pipeline
- Introduce security scanning
- Explore AWS cloud architecture and services
- Demonstrate deployment and production-readiness practices

Professional / Portfolio Objective

The project is intended to demonstrate enterprise-style Quality Engineering practices including test strategy, risk-based testing, API automation, database validation, E2E testing, security testing, performance testing, CI/CD quality gates, test reporting, and production readiness.

## **3. Technology Stack**

Backend

| Technology | Purpose | Status |
|---|---:|---:|
| Node.js | Backend runtime | ✅ Implemented |
| TypeScript | Application development language | ✅ Implemented |
| Express.js | REST API framework | ✅ Implemented |

Testing

| Technology | Purpose | Status |
|---|---:|---:|
| Playwright | API and end-to-end automation | ✅ Implemented |
| TypeScript | Test development | ✅ Implemented |

Database

| Technology | Purpose | Status |
|---|---:|---:|
| PostgreSQL | Relational database | ⏳ Planned |

Frontend

| Technology | Purpose | Status |
|---|---:|---:|
| React | Web application UI | ⏳ Planned |

CI/CD

| Technology | Purpose | Status |
|---|---:|---:|
| GitHub Actions | Continuous Integration / Delivery | ⏳ Planned |

Security

| Technology | Purpose | Status |
|---|---:|---:|
| npm audit | Dependency vulnerability checking | ⏳ Planned |
| Checkmarx | Static Application Security Testing | ⏳ Planned |
| GitHub Security | Repository security scanning | ⏳ Planned |

Cloud

| Technology | Purpose | Status |
|---|---:|---:|
| AWS | Cloud platform | ⏳ Planned |
| AWS Lambda | Serverless processing | ⏳ Planned |
| Amazon RDS | Managed relational database | ⏳ Planned |
| Amazon S3 | Object/file storage | ⏳ Planned |
| Amazon CloudWatch | Monitoring and logging | ⏳ Planned |
| AWS Secrets Manager | Secrets management | ⏳ Planned |

Version Control

| Technology | Purpose | Status |
|---|---:|---:|
| Git | Source control | ✅ Implemented |
| GitHub | Source code repository | ✅ Implemented |

## **4. Current Architecture**

The current implementation focuses on the backend API and automated API testing.

                         FOMS
                          │
                          ▼
                  Express REST API
                          │
              ┌───────────┴───────────┐
              │                       │
         Health API             Authentication
              │                       │
              │                 /api/auth
              │                       │
              └───────────┬───────────┘
                          │
                    Playwright
                    API Tests
                          │
                    Test Results

Current Backend Structure

Client / Test

    │
    ▼
Express Server

    │
    ├── GET /health
    │
    └── /api/auth
            │
            └── Login API

Current Test Architecture

Playwright is configured to automatically start or reuse the FOMS backend before executing API tests.

Playwright
    │
    ▼
webServer Configuration
    │
    ▼
app/backend
    │
    ▼
npm run dev
    │
    ▼
http://localhost:3000/health
    │
    ▼
API Tests

Current Test Status

The API test suite is currently passing:

Running 6 tests using 4 workers

6 passed (856ms)

## **5. Project Structure**

(Short summary of current layout)

- app/backend — Express server and API implementation
- tests — Playwright API tests
- .github — CI configuration (planned)
- package.json, tsconfig.json, playwright.config.ts

## **6. Getting Started**

Quick steps to run the project locally (backend + tests):

1. Install dependencies: `npm install`
2. Start backend (development): `npm run dev`
3. Verify health: `curl http://localhost:3000/health`
4. Run API tests: `npx playwright test`

## **7. Running Tests**

- API tests are implemented with Playwright's API testing in TypeScript.
- Playwright is configured to start or reuse the backend using the `webServer` option.
- Current test result: 6 passing tests.

## **8. Current API Endpoints**

- GET /health — Health check endpoint
- POST /api/auth/login — Login (authentication foundation)

(Additional business APIs are planned: sales-orders, purchase-orders, transfers)

## **9. Quality Engineering**

Quality is integrated across the development lifecycle with a staged approach:

Requirements → Development → API Testing → Database Validation → Integration Testing → End-to-End Testing → Security Testing → Performance Testing → CI/CD Quality Gate → Deployment

Automated testing will be expanded alongside features so new functionality is developed with corresponding automated validation.

## **10. Current Status**

Current Phase: Phase 2 — Authentication & Authorization

Completed

- Project repository
- Project structure
- Node.js / npm
- TypeScript
- Express backend
- Development server
- /health endpoint
- Authentication API foundation
- Playwright configuration
- API test framework
- Playwright web server configuration
- 6 API tests passing

Currently Working On

- JWT authentication
- Authentication middleware
- Protected API endpoints
- Authorization
- Authentication test coverage

## **11. Roadmap**

Roadmap → [ROADMAP.md](ROADMAP.md)
