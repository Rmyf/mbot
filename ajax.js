document.body.querySelector('#up').addEventListener("click", function () {
    // let message = document.querySelector('#message').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/forward', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("up");
            }
        }
    }
});

document.body.querySelector('#down').addEventListener("click", function () {

});

document.body.querySelector('#left').addEventListener("click", function () {

});

document.body.querySelector('#right').addEventListener("click", function () {

});
