# Project Roadmap

## Our updated project vision

An agentic Finance & Order Management System with a full-stack application, REST APIs, intelligent business agents, and an integrated AI-assisted quality engineering framework covering UI, API, end-to-end testing and analysis.

---

## Phase 1 — Foundation

**We're currently here:**

- ✅ Backend
- ✅ Express
- ✅ TypeScript
- ✅ Health API
- ✅ Playwright API testing

---

## Phase 2 — Core application

**We'll build:**

```
Authentication
     ↓
Customers
     ↓
Products
     ↓
Sales Orders
     ↓
Purchase Orders
     ↓
Payments
     ↓
Transfers
```

---

## Phase 3 — Agentic capabilities

**Then introduce agents:**

- Sales Order Agent
- Purchase Order Agent
- Payment Agent
- Finance/Transfer Agent

---

## Phase 4 — Intelligent QA

**This is where we'd really like to take the project:**

```
              Agentic FOMS
                    │
                    ▼
             QA Intelligence
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
   Test Agent   Risk Agent   Analysis Agent
```

**For example, a QA Agent could analyse test results and say:**

> "Sales Order API has experienced three failures in the last five pipeline runs. The failures are concentrated around inventory validation."

That's a much more sophisticated portfolio project than simply saying:

> "I automated some Playwright tests."

---

## Architecture

### Application Architecture

```
                    FOMS
                     │
              ┌──────┴──────┐
              │             │
          Application     Agents
              │             │
      ┌───────┼───────┐     │
      │       │       │     │
   Sales   Purchase Payment  │
   Order    Order            │
                             │
              ┌──────────────┼──────────────┐
              │              │              │
          Validation      Risk Agent    Reconciliation
             Agent                         Agent
```

### Our current architecture

```
Finance-Order-Management-System
│
├── app
│   │
│   ├── backend          ← TypeScript + Node.js + Express
│   │
│   ├── frontend         ← TypeScript (we'll build this)
│   │
│   └── database         ← Database/schema/scripts
│
└── tests
    │
    ├── api              ← Playwright + TypeScript
    ├── e2e              ← Playwright + TypeScript
    └── ui               ← Playwright + TypeScript
```

### So what are we using?

| Component | Technology |
|-----------|-----------|
| Backend | TypeScript |
| Runtime | Node.js |
| API framework | Express |
| Frontend | TypeScript + React (planned) |
| API testing | Playwright + TypeScript |
| UI/E2E testing | Playwright + TypeScript |
| Database | We'll decide shortly |
| CI/CD | GitHub Actions |
| AI/Agents | We'll introduce later |

**TypeScript is the common language across almost the entire project.**

---

### QA Architecture

```
                 FOMS
                  │
       ┌──────────┴──────────┐
       │                     │
   Application             Agents
       │                     │
       │              ┌──────┼──────┐
       │              │      │      │
       │           Sales  Finance  Risk
       │           Agent   Agent   Agent
       │
       └──────────┬──────────
                  │
             QA Framework
                  │
      ┌───────────┼────────────┐
      │           │            │
     UI          API         Agent
   Testing     Testing       Testing
      │           │            │
      └───────────┼────────────┘
                  │
              E2E Testing
```

---

**You can edit this file directly on GitHub or update it in a PR. If you want, I can update the roadmap when you tell me which phases or tasks have changed.**
