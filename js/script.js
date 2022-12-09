document.getElementById("main-action").onclick = function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}
let buttons = document.getElementsByClassName("car-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    }
}

document.getElementById("price-action").onclick = function () {
    if (document.getElementById("price-name").value === "") {
        alert("Заполни поле имя!");
    } else if (document.getElementById("price-phone").value === "") {
        alert("Заполните поле телефона!");
    } else if (document.getElementById("price-car").value === "") {
        alert("Заполните поле автомобиля");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.rolse-img');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 50) + 'px,' + ((event.clientY * 0.3) / 50) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.1 * window.pageYOffset) + 'px';
    })
});