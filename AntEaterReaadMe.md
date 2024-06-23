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

///////////////////////////////
ADMIN:
///////////////////////////////
1
"\_id": "65638d2eee03c5d2b17a0440",
"firstName": "DemoAdmin",
"lastName": "Admin",
"email": "admin@gmail.com",
"role": "admin",

///////////////////////////////
PROJECT MANAGER:
///////////////////////////////
1
"\_id": "65638e88ee03c5d2b17a0448",
"firstName": "DemoPM",
"lastName": "Projectmanager",
"email": "projectmanager@gmail.com",
"role": "projectmanager",

2
"\_id": "664a1d1d360e688e6999f3e0",
"firstName": "Ahsoka",
"lastName": "Tano",
"email": "ahsoka@gmail.com",
"role": "projectmanager",

3
"\_id": "664a1f1e360e688e6999f3f4",
"firstName": "Din",
"lastName": "Djarin",
"email": "din@gmail.com",
"role": "projectmanager",

///////////////////////////////
DEVELOPER:
///////////////////////////////
1
"\_id": "65638f7d7645bc453860d770",
"firstName": "DemoDev",
"lastName": "Developer",
"email": "developer@gmail.com",
"role": "developer",

2
"\_id": "664a2153360e688e6999f408",
"firstName": "Padme ",
"lastName": "Amidala",
"email": "padme@gmail.com",
"role": "developer",

3
"\_id": "664a244d360e688e6999f411",
"firstName": "Kylo",
"lastName": "Ren",
"email": "kylo@gmail.com",
"role": "developer",

4
"\_id": "664a26fd360e688e6999f421",
"firstName": "Fennec",
"lastName": "Shand",
"email": "fennec@gmail.com",
"role": "developer",

5
"\_id": "664a2840360e688e6999f431",
"firstName": "Cassian",
"lastName": "Andor",
"email": "cassian@gmail.com",
"role": "developer",

1 DemoPM -> DemoDev
2 DemoPM -> Ahsoka
3 DemoPM -> Cassian
4 Fennec -> DemoPM
5 Cassian -> DemoPM
6 Kylo -> Padme
