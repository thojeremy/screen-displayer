/**
 * Replaces the content of a tag with the ID "selector" by "text"
 * @param {*} selector The ID that we should change
 * @param {*} text The text to write in the ID tag content
 */
const replaceDomId = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
};

/**
 * Replaces all the IDs of the current DOM according to the constants
 * provided by the configuration file : DOM_ids_replacements.json
 */
const replaceDomIdsWithConstants = () => {
    const domIdsReplacements = require("../resources/constants/DOM_ids_replacements.json");
    Object.keys(domIdsReplacements).forEach(idToReplace => {
        const mapping = domIdsReplacements[idToReplace];
        switch(mapping.type){
            // Makes an eval on mapping text
            case "eval":
                replaceDomId(`${idToReplace}`, eval(mapping.text));
            break;
            
            // Calculate a result
            case "calculation":
                replaceDomId(`${idToReplace}`, eval(idToReplace));
            break;
            
            // Process a direct mapping
            default:
                replaceDomId(`${idToReplace}`, `${mapping.text}`);
            break;
        }
    });
};

module.exports = {
    "replaceDomId": replaceDomId,
    "replaceDomIdsWithConstants": replaceDomIdsWithConstants
}