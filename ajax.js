console.log("init");
document.querySelector('#up').addEventListener("click", function() {
    console.log("clicked");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/forward', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("up");
            }
        }
    }
    xhr.send();
});

document.body.querySelector('#down').addEventListener("click", function() {
    console.log("clicked");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/backward', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("down");
            }
        }
    }
    xhr.send();

});

document.body.querySelector('#left').addEventListener("click", function() {
    console.log("clicked");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/left', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("left");
            }
        }
    }
    xhr.send();

});

document.body.querySelector('#right').addEventListener("click", function() {
    console.log("clicked");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/right', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("right");
            }
        }
    }
    xhr.send();

});