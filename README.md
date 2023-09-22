# BAP Boilerplate SDK
---
## What is BAP SDK?
A comprehensive NodeJS + React Native SDK, empowering developers to efficiently create Beckn-enabled consumer-facing applications (BAPs) using a streamlined boilerplate codebase. The SDK takes care of Beckn's backend code, allowing developers to prioritize UI/UX enhancements and simplify the overall development process.

## What is the Project Application?
The SDK not only manages the backend code but also offers a pre-designed UI template. This eliminates the need for users to start their applications from scratch. They can make modifications to the provided UI, while the SDK handles the backend intricacies. This approach lets developers focus sharply on refining UI and UX, thus streamlining the development process.

## Getting started
To get started with the BAP Boilerplate SDK, please try out our cloud-based demo site at: https://experience-guide-staging.becknprotocol.io/select-experience/

## Table of contents
- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Running Application](#running-application)
- [Demo Links](#demo-links)
- [Project Structure](#project-structure)
- [Reporting Issues](#reporting-issues)
---

### Prerequisites

| Software dependencies | Versions |
| :--- | ------- |
| **[node](https://nodejs.org/en/download/)** | > 14.x.x (Install the latest release of LTS version) |
| **[expo-cli](https://docs.expo.dev/more/expo-cli/)** | > 6.x.x (Install the latest release: `npm install -g expo-cli`) |
| **[ts-node](https://www.npmjs.com/package/ts-node)** | 	Latest version of yarn: `npm install -g ts-node` |
| **[yarn](https://classic.yarnpkg.com/en/)** | Latest version of yarn: `npm install -g yarn` |
| **[nodemon](https://www.npmjs.com/package/nodemon)** | Latest version  of nodemon: `npm install -g nodemon` |

---
### Project Setup

#### 1. Using GitHub Repo

**Clone the project**
```bash
  git clone https://github.com/beckn/BAP-Boilerplate-SDK.git
```

**Open BAP-Boilerplate-SDK folder in your terminal and run**
```bash
  sudo npm install -g
```

**Open a new folder in which you want to create your project and run**
```bash
  bap-sdk
```
Choose the required prompts and enter the required fields provided by the CLI tool. This will setup a template project in your current folder, which can be modified by users.

#### 2. Using NPM Package

**Install the npm package globally**
```bash
  sudo npm i bap-boilerplate-sdk -g
```

**Open a new folder in which you want to create your project and run**
```bash
  bap-sdk
```
Choose the required prompts and enter the required fields provided by the CLI tool. This will setup a template project in your current folder, which can be modified by users.

#### 3. Using Docker Images

**Pull the latest docker image**
```bash
  docker pull sandeeppillai/bap-sdk:v1
```

**Run the container in interactive mode**
```bash
  docker container run -it sandeeppillai/bap-sdk:v1
```
Choose the required prompts and enter the required fields provided by the CLI tool. This will setup a template project in the working directory of the docker container.

**Copy the project-name created above**
Create a new directory and copy the newly created project from docker container to your working directory
```bash
  docker cp {container-id}:/app/{project-name} .
```
Type `docker ps -a` to find the container id

---

### Running Application
Once the application is setup in your working directory follow the below steps to run your app:

**Installing Dependencies**
```bash
  npm install
```

**Setup Enviornment Variables**
To run this project, you will need to add the following environment variables to your .env file.

Create .env file in current working directory: `touch .env
`

Fill the env variables as shown above

| Env Variables | Description | Type |
| ------------ | ----------- | ---- |
| BECKN_URL | This is the api endpoint used to make call's to the protocol server | string | 
| MONGO_INITDB_ROOT_USERNAME | username for the mongodb image | string |
| MONGO_INITDB_ROOT_PASSWORD | password for the mongodb image | string |
| MONGO_INITDB_DATABASE | database name for the mongodb image | string |
| RABBITMQ_DEFAULT_USER | username for the rabbitmq image | string |
| RABBITMQ_DEFAULT_PASS | password for the rabbitmq image | string |

> Replace the default url in beckn.config.ts with `process.env.BECKN_URL`, similarly replace default variables inside docker-compose.yaml file if needed.

**Setting up Backend Server**
Run all the required infrastructure and services using: `docker-compose up` in the current working directory.

If the developer is provided with an api endpoint add it in the env file in `BECKN_URL`. All the backend calls will be made to this api.

Else if the developer want's to test the local backend follow the steps provided here: [Protocol Server Setup](https://github.com/beckn/protocol-server/blob/master/setup.md)

**Run application**
```bash
  npm start
```
---

### Demo Links
**1. Link to Demo recording: [video](https://drive.google.com/file/d/1RsMddoMhVhpD0jmaPueIrZ2hoNu5tZLn/view)**
**2. Link to Deployed Application: [demo](https://experience-guide-staging.becknprotocol.io/select-experience/)**


---
### Project Structure
```bash
├── templates/
│   ├── BAP-Education/             # Boilerplate for education
│   │    └── docker-compose.yaml  
│   │  
│   ├── BAP-Mobility/              # Boilerplate for mobility
│   │    └── docker-compose.yaml  
│   │   
│   └── BAP-Retail/                # Boilerplate for retail 
│        └── docker-compose.yaml 
│ 
├── Dockerfile                     # File to deploy docker images
├── index.js                       # sdk entry point for initialisation 
├── outputDirectory.js             # sdk output file
└── package.json
```
---

### Reporting Issues
We have an open and active [issue tracker](https://github.com/beckn/BAP-Boilerplate-SDK/issues). Please report any issues.