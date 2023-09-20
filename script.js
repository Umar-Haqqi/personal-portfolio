// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#container'),
//     smooth: true
// });


// responsive nav sidebar
let toggle_btn = document.querySelector(".toggle-btn");
let nav_sidebar = document.querySelector(".active-nav");
let nav_hide = document.querySelector(".nav-hide")

toggle_btn.addEventListener("click", () => {
    nav_sidebar.style.transform = "translateX(0)";
})
nav_hide.addEventListener("click", () => {
    nav_sidebar.style.transform = "translateX(100%)";
})


// image hover animation effecyt
let elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
    let image = val.childNodes[3];

    val.addEventListener("mouseenter", function () {
        image.style.opacity = 1;
    });

    val.addEventListener("mouseleave", function () {
        image.style.opacity = 0;
        image.style.transform = "rotate(0deg)";
    });

    val.addEventListener("mousemove", function (event) {
        let mouseX = event.clientX - val.getBoundingClientRect().left;
        let imageWidth = image.offsetWidth;
        let maxTilt = 2;

        let tiltAmount = (mouseX / imageWidth - 0.5) * maxTilt;
        image.style.transform = `rotate(${tiltAmount}deg)`;

        val.childNodes[3].style.left = event.clientX + "px";
    });
});


