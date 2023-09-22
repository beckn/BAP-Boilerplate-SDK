import * as fs from 'fs';
const CURR_DIR = process.cwd();

const outputDirectory = (templatePath, newProjectPath) => {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');

      // Rename
      if (file === '.npmignore') file = '.gitignore';

      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);

      // recursive call
      outputDirectory(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
    }
  });
};

const updateContextFile = (newProjectPath, domain, bap_id, bap_uri) => {
  const contextFilePath = `${CURR_DIR}/${newProjectPath}/server/context.ts`;

  const contextContents = fs.readFileSync(contextFilePath, 'utf8');
  const modifiedContents = contextContents
    .replace('domain: "",', `domain: "${domain}",`)
    .replace('bap_id: "",', `bap_id: "${bap_id}",`)
    .replace('bap_uri: "",', `bap_uri: "${bap_uri}",`);

  fs.writeFileSync(contextFilePath, modifiedContents, 'utf8');
};

export { outputDirectory, updateContextFile };