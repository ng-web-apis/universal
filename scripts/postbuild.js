const fs = require('fs');

const DIST_LIB_PATH = 'dist/universal/';
const README_PATH = 'README.md';
const MOCKS = 'mocks.js';
const MOCKS_PATH = 'projects/universal/src/' + MOCKS;
const PATH_TO_MOCKS = DIST_LIB_PATH + MOCKS;
const PATH_TO_README = DIST_LIB_PATH + README_PATH;

copyExtraFiles();

function copyExtraFiles() {
    if (!fs.existsSync(README_PATH || !fs.existsSync(MOCKS_PATH))) {
        throw new Error('Requested files do not exit');
    } else {
        copyReadmeIntoDistFolder(README_PATH, PATH_TO_README);
        fs.copyFileSync(MOCKS_PATH, PATH_TO_MOCKS);
    }
}

function copyReadmeIntoDistFolder(srcPath, toPath) {
    const fileBody = fs.readFileSync(srcPath).toString();
    const withoutLogos = fileBody
        .replace('# ![logo](logo.svg) ', '')
        .replace('<img src="web-api.svg" align="top"> ', '');

    fs.writeFileSync(toPath, withoutLogos);
}
