# Finance Order Management System (FOMS)

This README contains the top-level project information and Quality Engineering focus for the Finance & Order Management System.

## **1. Project Overview**

Finance & Order Management System (FOMS) is a full-stack business application designed to manage finance and order-related processes within an organisation.

The system is being developed as a practical demonstration of a modern enterprise application, covering backend API development, authentication, database management, order processing, financial transactions, and AI-assisted quality engineering.

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

The project is also being developed with a strong Quality Engineering (QE) focus. Automated testing is integrated throughout the development lifecycle rather than being treated as a separate activity. The testing framework demonstrates:

1. **Testing AI-driven applications** — validating AI-generated outputs, behaviour, reliability, safety, accuracy and integration.
2. **AI-assisted Quality Engineering** — using AI agents and AI tools throughout the software development and testing lifecycle to improve test coverage, productivity and quality analysis.

## **2. Objectives**

### **Application Development**

Build a realistic transaction-based Finance & Order Management System (FOMS)

- Develop RESTful APIs using C# and ASP.NET Core Web API
- Implement a modular and maintainable enterprise application architecture
- Implement secure authentication and role-based authorization
- Design and integrate a relational SQL Server database
- Use Entity Framework Core for application data access
- Implement sales and purchase order workflows
- Implement customer and product management
- Implement invoice and payment processing
- Implement financial transactions and fund transfers
- Implement transaction integrity, validation, auditability, and business rules
- Develop a Python-based AI agent layer supporting individual business capabilities
- Implement feature-specific AI agents for order processing, payments, finance, risk, and workflow assistance
- Integrate AI agents with the core C# application through APIs and/or events
- Maintain the C# application as the system of record while using AI agents for analysis, recommendations, and intelligent automation

### **Quality Engineering**

Build a maintainable automated test framework using Playwright and TypeScript

- Implement automated API testing against the ASP.NET Core APIs
- Implement UI testing for the React frontend
- Implement end-to-end testing across complete business workflows
- Implement integration testing between application components
- Validate database transactions, data integrity, and business outcomes
- Implement functional and regression testing
- Implement authentication and authorization testing
- Implement security testing and vulnerability validation
- Implement performance and reliability testing
- Implement negative, boundary, and error-condition testing
- Implement testing of AI agent APIs, workflows, and responses where appropriate
- Integrate automated quality checks into the CI/CD pipeline
- Generate test results and quality reports to support release decisions
- Apply risk-based testing and production-readiness practices

### **DevOps & Cloud**

- Implement Git-based development and branching practices
- Build a CI/CD pipeline using GitHub Actions
- Integrate automated API, UI, integration, and E2E testing into the pipeline
- Integrate code quality and security checks into CI/CD
- Implement dependency and vulnerability scanning
- Introduce application security testing using tools such as Checkmarx
- Implement build, test, quality-gate, and deployment stages
- Explore and implement appropriate AWS cloud services
- Implement cloud-based application deployment
- Introduce cloud logging, monitoring, and operational visibility
- Apply secure configuration and secrets-management practices
- Demonstrate deployment, rollback, environment management, and production-readiness practices
- Establish a foundation for future scalability and cloud-native capabilities

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
┌────────────────────────────────────────────────────────────────┐
│                    ASP.NET CORE / C# BACKEND                   │
│                                                                │
│  ┌───────────┐  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │
│  │   Auth    │  │Customers │  │  Orders  │  │ Payments/    │  │
│  │  Module   │  │  Module  │  │  Module  │  │ Finance      │  │
│  └─────┬─────┘  └────┬─────┘  └────┬─────┘  │ Module       │  │
│        │             │             │        └─────┬────────┘  │
│        └─────────────┴─────────────┴──────────────┘           │
│                              │                                 │
│                              ▼                                 │
│                    ┌────────────────────┐                      │
│                    │ Business Services  │                      │
│                    │ C# / Application   │                      │
│                    │ Layer              │                      │
│                    └─────────┬──────────┘                      │
│                              │                                 │
│                    ┌─────────▼──────────┐                      │
│                    │ Entity Framework   │                      │
│                    │ Core               │                      │
│                    └─────────┬──────────┘                      │
└──────────────────────────────┼──────────────────────────────────┘
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

The test suite is organized using Playwright with a comprehensive, modular structure demonstrating both **Testing AI-driven applications** and **AI-assisted Quality Engineering**:

```
tests/
│
├── playwright/
│   │
│   ├── api/
│   │   ├── auth/                    # Authentication API tests
│   │   ├── orders/                  # Order management API tests
│   │   ├── payments/                # Payment API tests
│   │   ├── users/                   # User management API tests
│   │   └── security/                # API security tests
│   │
│   ├── ui/
│   │   ├── login/                   # Login UI tests
│   │   ├── orders/                  # Order UI tests
│   │   └── payments/                # Payment UI tests
│   │
│   ├── e2e/
│   │   ├── sales-order/             # Sales order workflows
│   │   ├── purchase-order/          # Purchase order workflows
│   │   ├── payment/                 # Payment workflows
│   │   └── funds-transfer/          # Financial transaction workflows
│   │
│   ├── ai/
│   │   ├── ai-functional/           # AI feature functional tests
│   │   ├── ai-quality/              # AI output quality tests
│   │   ├── ai-safety/               # AI safety and boundary tests
│   │   ├── ai-security/             # AI security tests
│   │   └── ai-resilience/           # AI failure and resilience tests
│   │
│   ├── fixtures/                    # Shared test fixtures
│   ├── helpers/                     # Test utilities and API helpers
│   └── playwright.config.ts         # Playwright configuration
│
├── ai-engineering/
│   │
│   ├── agents/
│   │   ├── orchestrator/            # Coordinates AI QE activities
│   │   ├── qe-agent/                # Quality engineering intelligence
│   │   ├── api-agent/               # API analysis and test generation
│   │   ├── postman-agent/           # API collection automation
│   │   ├── security-agent/          # Security test analysis
│   │   ├── auth-agent/              # Authentication testing
│   │   ├── order-agent/             # Order test intelligence
│   │   ├── payment-agent/           # Payment test intelligence
│   │   └── reporting-agent/         # AI-assisted quality reporting
│   │
│   ├── prompts/
│   │   ├── test-generation/         # Controlled test-generation prompts
│   │   ├── failure-analysis/        # Test failure analysis prompts
│   │   └── quality-analysis/        # Quality assessment prompts
│   │
│   └── evaluations/
│       ├── accuracy/                # AI response accuracy
│       ├── consistency/             # Response consistency
│       ├── relevance/               # Response relevance
│       └── safety/                  # AI safety evaluation
│
├── test-data/
│   ├── api/
│   ├── orders/
│   ├── payments/
│   ├── users/
│   └── ai/                          # AI evaluation datasets
│
├── contracts/
│   └── openapi/                     # API contracts / specifications
│
└── results/
    ├── playwright/                  # Automated test results
    ├── ai/                          # AI evaluation results
    ├── security/                    # Security results
    └── quality/                     # Quality engineering reports
```

### Test Categories

#### **API Tests** (`tests/playwright/api/`)

API tests validate the FOMS backend and service contracts.

- REST API validation
- Request/response contracts
- Status codes
- Error handling
- Authentication and authorization
- Boundary conditions
- Business-rule validation
- API security

#### **UI Tests** (`tests/playwright/ui/`)

UI tests validate the application's user-facing functionality.

- Navigation
- User interactions
- Forms
- Validation
- Error handling
- Authentication
- Responsive behaviour
- Accessibility

#### **E2E Tests** (`tests/playwright/e2e/`)

E2E tests validate complete business journeys.

Example flow:
```
Login
  ↓
Create Sales Order
  ↓
Approve Order
  ↓
Process Payment
  ↓
Verify Transaction
```

These tests validate technical integration as well as business outcomes.

#### **AI Functional Testing** (`tests/playwright/ai/ai-functional/`)

This layer demonstrates the ability to test applications containing AI-driven functionality.

Examples include:
- AI-generated recommendations
- AI-generated order descriptions
- AI-assisted financial categorisation
- AI-generated summaries
- AI-powered search
- AI conversational interfaces
- AI-assisted decision support

AI functional testing validates the behaviour and intent of the response, rather than relying exclusively on exact string matching:

```
User Input
    ↓
AI Service
    ↓
AI Response
    ↓
Validate:
  ├── Correct intent
  ├── Relevant response
  ├── Required information
  ├── No prohibited content
  └── Expected business behaviour
```

#### **AI Quality Testing** (`tests/playwright/ai/ai-quality/`)

AI outputs are often non-deterministic, so traditional assertions such as:

```typescript
expect(response).toBe("exact response")
```

may not always be appropriate.

Instead, the framework evaluates characteristics such as:

- Accuracy
- Relevance
- Completeness
- Consistency
- Groundedness
- Response quality
- Business-rule adherence

Where appropriate, deterministic assertions are combined with structured AI evaluation criteria.

#### **AI Safety Testing** (`tests/playwright/ai/ai-safety/`)

Tests evaluate how the AI behaves when presented with problematic or unexpected inputs.

Examples include:
- Prompt injection attempts
- Malicious instructions
- Sensitive information requests
- Out-of-scope questions
- Unsafe requests
- Attempts to bypass business rules
- Attempts to manipulate AI behaviour

The objective is to verify that the AI system remains within its intended boundaries.

#### **AI Security Testing** (`tests/playwright/ai/ai-security/`)

Security testing covers AI-specific risks in addition to traditional application security.

Examples include:
- Prompt injection
- Data leakage
- Excessive permissions
- Insecure tool usage
- Unauthorized data access
- Sensitive information exposure
- Malicious inputs
- AI-generated commands or actions

AI security testing complements the existing API and application security testing.

#### **AI Resilience Testing** (`tests/playwright/ai/ai-resilience/`)

AI systems depend on external models and services, so resilience is an important quality characteristic.

Tests validate:
- Model/service unavailable
- API timeout
- Rate limiting
- Invalid AI response
- Unexpected model output
- Partial failures
- Retry behaviour
- Fallback behaviour
- Graceful degradation

### Test Infrastructure

- **Fixtures**: Reusable test data and setup/teardown logic
- **Helpers**: Common utility functions for test operations
- **Configuration**: Centralized Playwright settings and environment management

### AI Engineering Framework

- **Agents**: Specialized AI agents for quality engineering tasks
  - Orchestrator: Coordinates overall AI QE activities
  - QE Agent: Delivers quality engineering intelligence
  - API Agent: Analyzes APIs and generates tests
  - Security Agent: Performs security test analysis
  - Domain-specific agents: Order, Payment, Auth agents

- **Prompts**: Controlled prompts for consistent AI-assisted workflows
  - Test generation prompts
  - Failure analysis prompts
  - Quality assessment prompts

- **Evaluations**: Framework for evaluating AI output quality
  - Accuracy evaluation
  - Consistency checking
  - Relevance assessment
  - Safety verification

- **Test Data**: Comprehensive datasets for all test types
  - API test data
  - Business domain test data
  - AI evaluation datasets

- **Results & Reporting**: Centralized storage for test outcomes
  - Playwright test results
  - AI evaluation results
  - Security test results
  - Quality engineering reports

## **10. Project Phase**

```
PHASE 1 — C# BACKEND FOUNDATION
        │
        ├── 1. Check .NET SDK
        ├── 2. Create ASP.NET Core API
        ├── 3. Set up C# project structure
        ├── 4. Create /health endpoint
        ├── 5. Run API locally
        └── 6. Connect Playwright
                 │
                 ▼
PHASE 2 — DATABASE
        │
        ├── SQL Server
        ├── Entity Framework Core
        ├── Database design
        └── Migrations
                 │
                 ▼
PHASE 3 — AUTHENTICATION
        │
        ├── Login
        ├── JWT
        ├── Authorization
        └── Playwright API tests
                 │
                 ▼
PHASE 4 — BUSINESS FEATURES
        │
        ├── Users
        ├── Customers
        ├── Products
        ├── Sales Orders
        ├── Purchase Orders
        ├── Invoices
        └── Payments
                 │
                 ▼
PHASE 5 — AI AGENTS
        │
        ├── Order Agent
        ├── Payment Agent
        ├── Finance Agent
        └── Risk Agent
                 │
                 ▼
PHASE 6 — FRONTEND
        │
        └── React + TypeScript
                 │
                 ▼
PHASE 7 — ADVANCED QE
        │
        ├── API
        ├── UI
        ├── E2E
        ├── Integration
        ├── Database
        ├── Performance
        ├── Security
        ├── AI Functional
        ├── AI Quality
        ├── AI Safety
        ├── AI Security
        └── AI Resilience
                 │
                 ▼
PHASE 8 — CI/CD + AWS
```

## **11. Roadmap**

Roadmap → [ROADMAP.md](ROADMAP.md)
