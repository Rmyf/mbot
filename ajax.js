<<<<<<< HEAD
document.body.querySelector('#up').addEventListener("click", function() {
    // let message = document.querySelector('#message').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/forward', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
=======
console.log("init");
document.querySelector('#up').addEventListener("click", function () {
    console.log("clicked");
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/forward', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
    xhr.onreadystatechange = function () {
>>>>>>> fcfc7241259f08edada56051b825091d00094b7c
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("up");
            }
        }
    }
});

document.body.querySelector('#down').addEventListener("click", function() {
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

});

document.body.querySelector('#left').addEventListener("click", function() {
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

});

document.body.querySelector('#right').addEventListener("click", function() {
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

});