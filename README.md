# Finance Order Management System (FOMS)

This README contains the top-level project information and Quality Engineering focus for the Finance & Order Management System.

## **1. Project Overview**

Finance & Order Management System (FOMS) is a full-stack business application designed to manage finance and order-related processes within an organisation.

The system is being developed as a practical demonstration of a modern enterprise application, covering backend API development, authentication, database management, order processing, financial transactions, AI-driven agents, and comprehensive testing.

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
- AI-powered order and payment processing agents

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
- Develop Python-based AI agents for order and payment processing

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

The project is intended to demonstrate enterprise-style Quality Engineering practices including test strategy, risk-based testing, API automation, database validation, E2E testing, security testing, and AI integration in business workflows.

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

```
                              ┌──────────────────────┐
                              │        USERS         │
                              └──────────┬───────────┘
                                         │
                                      HTTPS
                                         │
                                         ▼
                              ┌──────────────────────┐
                              │    React Frontend    │
                              │    TypeScript        │
                              └──────────┬───────────┘
                                         │
                                  REST / JSON API
                                         │
                                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    ASP.NET CORE / C# BACKEND                       │
│                                                                     │
│  ┌───────────┐  ┌──────────┐  ┌──────────┐  ┌───────────────────┐ │
│  │   Auth    │  │ Customers│  │  Orders  │  │ Payments/Finance │ │
│  │  Module   │  │  Module  │  │  Module  │  │      Module       │ │
│  └─────┬─────┘  └────┬─────┘  └────┬─────┘  └─────────┬─────────┘ │
│        │             │             │                  │           │
│        └─────────────┴─────────────┴──────────────────┘           │
│                              │                                     │
│                              ▼                                     │
│                    ┌────────────────────┐                          │
│                    │ Business Services  │                          │
│                    │ C# / Application   │                          │
│                    │ Layer              │                          │
│                    └─────────┬──────────┘                          │
│                              │                                     │
│                    ┌─────────▼──────────┐                          │
│                    │ Entity Framework   │                          │
│                    │ Core               │                          │
│                    └─────────┬──────────┘                          │
└──────────────────────────────┼──────────────────────────────────────┘
                               │
                               ▼
                     ┌──────────────────┐
                     │    SQL SERVER    │
                     │                  │
                     │ Users            │
                     │ Customers        │
                     │ Products         │
                     │ Sales Orders     │
                     │ Purchase Orders  │
                     │ Invoices         │
                     │ Payments         │
                     │ Transactions     │
                     └──────────────────┘


                         AI AGENT LAYER
                               ▲
                               │
                         REST / Events
                               │
               ┌───────────────┴────────────────┐
               │                                │
       ┌───────▼────────┐              ┌───────▼────────┐
       │ Python AI      │              │ Python AI      │
       │ Agent Service  │              │ Agent Service  │
       │                │              │                │
       │ Order Agent    │              │ Payment Agent  │
       │ Finance Agent  │              │ Risk Agent     │
       └────────────────┘              └────────────────┘
```

### Architecture Components

**Frontend Layer**
- React application with TypeScript
- User interface for all business operations
- Secure HTTPS communication with backend

**Backend Layer (ASP.NET Core)**
- **Auth Module**: User authentication and authorization
- **Customers Module**: Customer management and profiles
- **Orders Module**: Sales and purchase order management
- **Payments/Finance Module**: Payment processing and financial operations
- **Business Services Layer**: Core application logic
- **Entity Framework Core**: ORM for database operations

**Database Layer**
- SQL Server Developer Edition
- Relational database with normalized schema
- Tables: Users, Customers, Products, Sales Orders, Purchase Orders, Invoices, Payments, Transactions

**AI Agent Layer**
- Python-based microservices
- **Order Agent**: Automates order processing and workflows
- **Finance Agent**: Handles financial transactions and fund transfers
- **Payment Agent**: Manages payment processing and reconciliation
- **Risk Agent**: Analyzes and flags high-risk transactions
- REST/Event-driven communication with backend

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
