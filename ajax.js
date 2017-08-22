
document.querySelector('#up').addEventListener("click", function() {
    console.log("clicked");
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/forward', true);
    xhr.send();
});

document.body.querySelector('#down').addEventListener("click", function() {
    console.log("clicked");
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/backward', true);
    xhr.send();
});

document.body.querySelector('#left').addEventListener("click", function() {
    console.log("clicked");
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/left', true);
    xhr.send();
});

document.body.querySelector('#right').addEventListener("click", function() {
    console.log("clicked");
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/right', true);
    xhr.send();
});

document.body.querySelector('#stop').addEventListener("click", function() {
    console.log("clicked");
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/vide', true);
    xhr.send();
});