<div align="center">

# 🚀 ServeRest Cypress Automation Framework

API and End-to-End automation framework developed with Cypress and JavaScript.

![Cypress](https://img.shields.io/badge/Cypress-15.x-69D3A7?logo=cypress)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js)
![Status](https://img.shields.io/badge/Status-In%20Progress-yellow)

</div>

---

# 📖 Overview

This project was created as part of a QA Automation technical challenge.

The objective is to build a scalable and maintainable automation framework using Cypress and JavaScript, covering both Frontend and API test scenarios.

The framework follows software engineering best practices, emphasizing:

- Maintainability
- Readability
- Reusability
- Scalability
- Clear project organization

---

# 🎯 Current Progress

## Frontend

| Scenario | Status |
|----------|--------|
| Administrator User Registration | ✅ Completed |
| User Login | ⏳ Planned |
| Product Registration | ⏳ Planned |

---

## API

| Scenario | Status |
|----------|--------|
| User Creation | ⏳ Planned |
| Authentication | ⏳ Planned |
| Product Registration | ⏳ Planned |

---

# 🏗 Current Architecture

```text
.
├── e2e
│   ├── frontend
│   │   └── user-registration.cy.js
│   │
│   └── api
│
├── fixtures
│
├── pages
│   └── RegistrationPage.js
│
├── support
│
├── utils
│   └── userFactory.js
│
├── cypress.config.js
├── package.json
└── README.md