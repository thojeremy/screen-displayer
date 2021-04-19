const domIdsReplacements = require("./resources/constants/DOM_ids_replacements.json");

const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
};

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    // Browse DOM ids replacements constants
    Object.keys(domIdsReplacements).forEach(idToReplace => {
        const mapping = domIdsReplacements[idToReplace];
        switch(mapping.type){
            // Makes an eval on mapping text
            case "eval":
                replaceText(`${idToReplace}`, eval(mapping.text));
            break;
            
            // Calculate a result
            case "calculation":
                replaceText(`${idToReplace}`, eval(idToReplace));
            break;
            
            // Process a direct mapping
            default:
                replaceText(`${idToReplace}`, `${mapping.text}`);
            break;
        }
    });
    
  })