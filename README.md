<div align="center">

# 🚀 ServeRest Cypress Automation Framework

Professional End-to-End and API Test Automation Framework built with **Cypress** and **JavaScript**.

![Cypress](https://img.shields.io/badge/Cypress-15.x-69D3A7?logo=cypress)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)
![Status](https://img.shields.io/badge/Status-In%20Progress-yellow)

</div>

---

# 📖 Overview

This project was developed as part of a **QA Automation Technical Challenge**.

The goal is to build a scalable, maintainable and reusable automation framework using **Cypress** to validate both **Frontend** and **API** business flows of the **ServeRest** application.

The framework follows software engineering and test automation best practices, focusing on:

- Maintainability
- Readability
- Reusability
- Scalability
- Separation of responsibilities
- Dynamic test data
- Reliable assertions
- Clean architecture

---

# 🏗 Framework Architecture

```text
                     Test Cases
                          │
                          ▼
                    Page Objects
                          │
                          ▼
                  Custom Commands
                          │
         ┌────────────────┴────────────────┐
         ▼                                 ▼
   Frontend UI                      ServeRest API
                          │
                          ▼
                      Assertions
```

---

# 🛠 Technology Stack

| Technology | Purpose |
|------------|---------|
| Cypress 15 | End-to-End Automation |
| JavaScript (ES6) | Programming Language |
| Node.js | Runtime |
| Git | Version Control |
| GitHub | Source Code Management |

---

# 📂 Project Structure

```text
.
├── cypress
│
├── e2e
│   ├── frontend
│   │   ├── user-registration.cy.js
│   │   ├── user-login.cy.js
│   │   └── product-registration.cy.js
│   │
│   └── api
│
├── factories
│   ├── userFactory.js
│   └── productFactory.js
│
├── pages
│   ├── RegistrationPage.js
│   ├── LoginPage.js
│   ├── AdminHomePage.js
│   └── ProductRegistrationPage.js
│
├── support
│   ├── api
│   │   ├── auth.js
│   │   └── users.js
│   │
│   ├── commands.js
│   └── e2e.js
│
├── fixtures
│
├── cypress.config.js
├── package.json
└── README.md
```

---

# ✅ Implemented Features

- ✔ Cypress Configuration
- ✔ Page Object Model (POM)
- ✔ Factory Pattern
- ✔ Dynamic Test Data
- ✔ API Custom Commands
- ✔ Frontend Automation
- ✔ Request & Response Validation
- ✔ Reusable Components
- ✔ Explicit Assertions
- ✔ Modular Project Structure

---

# 🎯 Automated Scenarios

## Frontend

| Scenario | Status |
|----------|--------|
| Administrator Registration | ✅ Completed |
| Administrator Login | ✅ Completed |
| Product Registration | ✅ Completed |

---

## API Support Layer

| Feature | Status |
|----------|--------|
| Create User Command | ✅ Completed |
| Login Command | ✅ Completed |
| Product Command | 🚧 Planned |

---

# 🧪 Test Strategy

The framework follows the principle of **independent test execution**.

Each End-to-End scenario prepares its own test data using the API whenever possible, avoiding dependencies between tests.

Example flow:

```text
Create User (API)

↓

Login (Frontend)

↓

Business Action (Frontend)

↓

Validate UI

↓

Validate API Response
```

This approach provides:

- Faster execution
- Better maintainability
- Lower UI dependency
- Stable automated tests

---

# ▶ Running the Project

## Install dependencies

```bash
npm install
```

---

## Open Cypress

```bash
npm run cy:open
```

---

## Run all tests

```bash
npm run cy:run
```

---

## Run all Frontend tests

```bash
npm run test:frontend
```

---

## Run Registration scenario

```bash
npm run test:registration
```

---

## Run Login scenario

```bash
npm run test:login
```

---

## Run Product Registration scenario

```bash
npm run test:product
```

---

# ✔ Best Practices Applied

- Page Object Model
- Factory Pattern
- Dynamic Test Data
- API Data Preparation
- Separation of Responsibilities
- Reusable Commands
- Independent Test Execution
- Explicit Assertions
- Stable Selectors
- Clean Code
- Version Control with Git

---

# 📈 Development Log

## Version 1.0

- Initial project structure
- Cypress configuration
- Project documentation

---

## Version 1.1

- Administrator Registration scenario
- Registration Page Object
- Dynamic User Factory

---

## Version 1.2

- API layer created
- User creation command
- Login command

---

## Version 1.3

- Administrator Login scenario
- Login Page Object
- Admin Home Page

---

## Version 1.4

- Product Factory
- Product Registration Page
- Product Registration scenario

---

# 🚀 Roadmap

### API Automation

- User API Tests
- Login API Tests
- Product API Tests

### Reports

- Allure Report Integration

### CI/CD

- GitHub Actions

### Improvements

- Environment Management
- Docker Support
- Parallel Execution
- Data Cleanup
- Pipeline Execution

---

# 👨‍💻 Author

**Caio Silva**

Senior QA Engineer

GitHub

https://github.com/caiovfsilva-cmyk

LinkedIn

https://www.linkedin.com/in/caiovfsilva

---

# 📄 License

This repository was developed exclusively for educational purposes, portfolio presentation and technical assessment in Software Quality Assurance.