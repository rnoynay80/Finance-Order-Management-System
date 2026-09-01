# Finance Order Management System (FOMS)

This README contains the top-level project information and Quality Engineering focus for the Finance & Order Management System.

## **1. Project Overview**

Finance & Order Management System (FOMS) is a full-stack business application designed to manage finance and order-related processes within an organisation.

The system is being developed as a practical demonstration of a modern enterprise application, covering backend API development, authentication, database management, order processing, financial transactions, and comprehensive quality engineering practices.

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

The project is intended to demonstrate enterprise-style Quality Engineering practices including test strategy, risk-based testing, API automation, database validation, E2E testing, security testing, and CI/CD integration.

## **3. Technology Stack**

```
┌─────────────────────────────────────────────────────┐
│                 FOMS TECHNOLOGY STACK                │
├─────────────────────────────────────────────────────┤
│                                                     │
│ Frontend       React + TypeScript                   │
│ Backend        C# + ASP.NET Core Web API            │
│ ORM            Entity Framework Core                │
│ Database       SQL Server Developer                 │
│                                                     │
│ AI Layer       Python                               │
│ AI Agents      Feature-specific agents              │
│                                                     │
│ API Testing    Playwright + TypeScript              │
│ UI Testing     Playwright + TypeScript              │
│ E2E Testing    Playwright + TypeScript              │
│                                                     │
│ CI/CD          GitHub Actions                       │
│ Security       Checkmarx + dependency scanning      │
│ Source Control Git / GitHub                         │
│ IDE            VS Code                              │
│                                                     │
│ Cloud          AWS                                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

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

## **9. Test Structure**

The test suite is organized using Playwright with a comprehensive, modular structure:

```
tests/
│
└── playwright/
    ├── api/
    │   ├── auth/                 # Authentication API tests
    │   ├── orders/               # Order management API tests
    │   ├── payments/             # Payment processing API tests
    │   └── users/                # User management API tests
    │
    ├── ui/
    │   ├── login/                # Login page UI tests
    │   ├── orders/               # Orders page UI tests
    │   └── payments/             # Payments page UI tests
    │
    ├── e2e/
    │   ├── sales-order/          # End-to-end sales order workflows
    │   ├── purchase-order/       # End-to-end purchase order workflows
    │   └── payment/              # End-to-end payment workflows
    │
    ├── fixtures/                 # Shared test data and fixtures
    ├── helpers/                  # Utility functions and helpers
    └── playwright.config.ts      # Playwright configuration
```

### Test Categories

**API Tests** (`tests/playwright/api/`)
- Validate REST API endpoints
- Test request/response contracts
- Verify error handling and status codes
- Validate data payloads and types

**UI Tests** (`tests/playwright/ui/`)
- Test user interface components
- Validate page navigation and interactions
- Verify visual elements and user workflows
- Test responsive design behaviors

**E2E Tests** (`tests/playwright/e2e/`)
- Test complete business workflows
- Validate cross-system integrations
- Test end-to-end user journeys
- Verify business logic and data consistency

### Test Infrastructure

- **Fixtures**: Reusable test data and setup/teardown logic
- **Helpers**: Common utility functions for test operations
- **Configuration**: Centralized Playwright settings and environment management

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
