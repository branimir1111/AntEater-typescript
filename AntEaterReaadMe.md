# AntEater (TypeScript)

#### (by Branimir Djordjevic)

This is a BugTracker app.

| Red.Br. | AntEater                                                        |
| ------- | --------------------------------------------------------------- |
| 1       | [`Starter_Folder_Configuration`](#starter_folder_configuration) |
| 2       | [`Setup server`](#setup_server)                                 |
| 3       | [`Setup_Client`](#setup_client)                                 |

## Starter_Folder_Configuration

[<strong style='color:green;'>⬆️ Back to Top</strong>](#content)

```tsx
📁 anteater-app-typescript/
├───📁 client/
│   ├───📁 src/
│   │   ├───📁 assets/
│   │   ├───📁 components/
│   │   ├───📁 images/
│   │   ├───📁 lib/
│   │   ├───📄 App.tsx
│   │   ├───📄 index.css
│   │   ├───📄 main.tsx
│   │   └───📄 vite-env.d.ts
│   ├───📄 .eslintrc.cjs
│   ├───📄 .gitignore
│   ├───📄 components.json
│   ├───📄 index.html
│   ├───📄 package-lock.json
│   ├───📄 package.json
│   ├───📄 postcss.config.js
│   ├───📄 README.md
│   ├───📄 tailwind.config.js
│   ├───📄 tsconfig.json
│   ├───📄 tsconfig.node.json
│   └───📄 vite.config.ts
├───📁 controllers/
├───📁 errors/
├───📁 middleware/
├───📁 models/
├───📁 routes/
├───📁 utils/
├───📄 .gitignore
├───📄 AntEaterReaadMe.md
├───📄 package-lock.json
├───📄 package.json
└───📄 server.js
```

## Setup_Server

[<strong style='color:green;'>⬆️ Back to Top</strong>](#content)

Libraries to be installed on the server:

```sh
npm i bcryptjs
npm i cloudinary
npm i concurrently
npm i cookie-parser
npm i cors
npm i datauri
npm i dotenv
npm i express
npm i express-async-errors
npm i express-validator
npm i http-status-codes
npm i jsonwebtoken
npm i mongoose
npm i morgan
npm i multer
npm i nodemon
```

Install all at once:

```sh
npm install bcryptjs cloudinary concurrently cookie-parser cors datauri dotenv express express-async-errors express-validator http-status-codes jsonwebtoken mongoose morgan multer nodemon
```

## Setup_Client

[<strong style='color:green;'>⬆️ Back to Top</strong>](#content)

Libraries to be installed on the client:

```sh
npm i @tanstack/react-query
npm i @tanstack/react-query-devtools
npm i @reduxjs/toolkit
npm i react-redux
npm i react-router-dom
npm i axios
npm i dayjs
```

Install all at once:

```sh
npm install @tanstack/react-query @tanstack/react-query-devtools @reduxjs/toolkit react-redux react-router-dom axios dayjs
```
