#!/usr/bin/env node

import inquirer from 'inquirer';        //Prompts in terminal
import * as fs from 'fs';               //Entire File System
import { dirname } from 'path';         
import { fileURLToPath } from 'url';
import { outputDirectory, updateContextFile } from './outputDirectory.js';
const CURR_DIR = process.cwd();

//Creating Directory Name
const __dirname = dirname(fileURLToPath(import.meta.url));
const CHOICES = fs.readdirSync(`${__dirname}/templates`);  //Folder choices inside templates
const DOMAINS = ['Retail: nic2004:52110', 'Mobility: nic2004:60221', 'Education: dsep:courses'];

const BAP_SDK = [
    {
        name: 'domain-choice',
        type: 'list',
        message: 'What would be your Beckn Application domain?',
        choices: DOMAINS,
    },
    {
        name: 'bap_id',
        type: 'input',
        message: 'Registered bap_id:',
    },
    {
        name: 'bap_uri',
        type: 'input',
        message: 'Registered bap_uri:',
    },
];

const BOILERPLATE = [
    {
        name: 'template-choice',
        type: 'list',
        message: 'What project template would you like to generate?',
        choices: CHOICES,
    },
    {
        name: 'project-name',
        type: 'input',
        message: 'Project name:',
        validate: function (input) {
        if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
        else return 'Project name may only include letters, numbers, underscores and hashes.';
        },
    },
];

console.log('\n');

inquirer.prompt(BAP_SDK).then(answers => {
    const domain = answers['domain-choice'];
    const bap_id = answers['bap_id'];
    const bap_uri = answers['bap_uri'];

    console.log('\nDomain: ', domain);
    console.log('BAP ID: ', bap_id);
    console.log('BAP URI: ', bap_uri, '\n');

    inquirer.prompt(BOILERPLATE).then(answers => {
        const projectChoice = answers['template-choice'];
        const projectName = answers['project-name'];
        const templatePath = `${__dirname}/templates/${projectChoice}`;

        fs.mkdirSync(`${CURR_DIR}/${projectName}`);
        outputDirectory(templatePath, projectName);
        updateContextFile(projectName, domain.split(": ")[1], bap_id, bap_uri);

        console.log('\nRun `npm install` to download dependencies\n');

    });

});