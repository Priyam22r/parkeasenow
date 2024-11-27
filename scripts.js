var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.clientX + "px"; // Use clientX
    crsr.style.top = dets.clientY + "px"; // Use clientY
    blur.style.left = dets.clientX - 250 + "px"; // Use clientX
    blur.style.top = dets.clientY - 250 + "px"; // Use clientY
});
document.getElementById('toggleMenu').addEventListener('click', function() {
    const additionalInfo = document.getElementById('additionalInfo');
    if (additionalInfo.style.display === 'none' || additionalInfo.style.display === '') {
        additionalInfo.style.display = 'block';
    } else {
        additionalInfo.style.display = 'none';
    }
});
var dot = document.createElement("div");
dot.style.width = "10px"; // Set dot size
dot.style.height = "10px";
dot.style.borderRadius = "50%";
dot.style.backgroundColor = "green"; // Initial color
dot.style.position = "absolute";
dot.style.pointerEvents = "none"; // Prevent interference with hover
document.body.appendChild(dot);

document.addEventListener("mousemove", function (event) {
    dot.style.left = event.clientX + "px"; // Follow mouse
    dot.style.top = event.clientY + "px";
});



// Update the scaling on hover for h4 elements
var h4all = document.querySelectorAll("#nav-part2 h4"); // Update selector to match the second file
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.transform = "scale(3)"; // Use transform for scaling
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        crsr.style.transform = "scale(1)"; // Use transform for scaling
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    });
});

// You can keep the rest of your animations and other functionalities as is
function page4Animation() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    });
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
        });
    });
}


function menuAnimation() {
    var menu = document.querySelector("nav h3");
    var full = document.querySelector("#full-scr");
    var navimg = document.querySelector("nav img");
    var flag = 0;
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0;
            navimg.style.opacity = 0;
            flag = 1;
        } else {
            full.style.top = "-100%";
            navimg.style.opacity = 1;
            flag = 0;
        }
    });
}

function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%";
    }, 4200);
}

page4Animation();
menuAnimation();
loaderAnimation();