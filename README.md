# User List App

A simple **Single Page Application (SPA)** built with **AngularJS (v1.8.3), TypeScript (v5.8.2), and Webpack (v5.98.0)**.

## 🚀 Getting Started

### 1️⃣ Clone the repository
```sh
git clone https://github.com/kochutyu/user-list.git
cd user-list
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 2️⃣ Install dependencies
```sh
npm run start
```
The app will be available at http://localhost:9000.

## 📦 Available Scripts

| Command          | Description                                   |
|-----------------|----------------------------------------------|
| `npm run start` | 🚀 Start the development server              |
| `npm run build` | 🏗 Build the project for production          |
| `npm run dev`   | 🛠 Build the project in development mode     |
| `npm run clean` | 🧹 Remove the `dist/` folder                 |

## 📂 Project Structure
```sh
/user-list
├── src/
│   ├── controllers/
│   │   ├── user-list.controller.ts
│   │   ├── user-view.controller.ts
│   │   ├── user-form.controller.ts
│   ├── services/
│   │   ├── user.service.ts
│   ├── directives/
│   │   ├── validate-user.directive.ts
│   ├── views/
│   │   ├── users.html
│   │   ├── user-view.html
│   │   ├── user-form.html
│   ├── styles.css
│   ├── index.html
│   ├── app.ts
├── package.json
├── tsconfig.json
├── webpack.config.js
├── .gitignore
├── README.md
```