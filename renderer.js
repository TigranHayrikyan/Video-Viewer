/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

function upload(){
    var input = document.getElementById("file");
    var reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    var fileName = input.files[0].name;
    reader.onload = function(){
        document.getElementById("video").src = reader.result;
        document.getElementById("description").textContent = '"' + fileName + '"'  + " File is opened"; 
        document.getElementById("description").style.color = "#ccc" ; 
    };
}