// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const testButton = document.getElementById('test-button');

if(testButton){
    testButton.addEventListener('click', function(){
        window.api.receive("tst-answer", (event, data) => {
            const testAnswer = document.getElementById("test-answer");
            if(testAnswer){
                testAnswer.innerHTML = `${testAnswer.innerHTML}<br/>${data}`;
            }
        });
        const testTextarea = document.getElementById("test-textarea");
        if(testTextarea){
            window.api.send("tst-sent", testTextarea.value);
        }
    });
}
