import Tabletop from "tabletop";

let sourceCodes = [];
let sourceCodeMap = {};
let globalCB = null;

const sourceCodeGoogleSheetUrl =
  "https://docs.google.com/spreadsheets/d/1A7Fqgj1_d0XaVn3AEdnnJRFNjYKgllGRLyaug2PTtgQ/edit?usp=sharing";

/**
 * Init
 * Initialize the tabletop plugin and load all source code info.
 */
const init = finishedCB => {
  Tabletop.init({
    key: sourceCodeGoogleSheetUrl,
    callback: processSourceCodeData,
    simpleSheet: true
  });
  globalCB = finishedCB;
};

/**
 * Call back for load source code data
 * @param {*} data
 * @param {*} tabletop
 */
const processSourceCodeData = (data, tabletop) => {
  data.forEach(sc => addSourceCode(sc));
  if (globalCB != null) {
    globalCB();
  }
};

/**
 * getSourceCode
 * Get one project's source by its name
 * @param {string} projectName
 * @returns A sourcecode obj.
 */
const getSourceCode = projectName => {
  return sourceCodeMap[projectName];
};

/**
 * getAllSourcecode
 * @returns List of projects
 */
const getAllSourceCode = () => {
  return sourceCodes.slice();
};

/**
 * addSourceCode
 * @param {sourcecode} sc
 */
const addSourceCode = sc => {
  sourceCodes.push(sc);
  sourceCodeMap[sc["Project Name"]] = sc;
};

export { init, addSourceCode, getAllSourceCode, getSourceCode };
