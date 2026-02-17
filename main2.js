if (document.title === "Laboratory equipment") {
   

window.addEventListener("scroll", function () {
    if (window.scrollY >= 7) {
    document.querySelector(".landing .logo").classList.add("move");
    }else {    
        document.querySelector(".landing .logo").classList.remove("move");
    }
});
const products = document.querySelectorAll(".equipments .card");

const observer4 = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
            entries[i].target.classList.add("top");
        }else {
            entries[i].target.classList.remove("top");
        }
    };
});
products.forEach(card => {
    observer4.observe(card);
});

let cards = document.querySelectorAll(".equipments .card");
cards.forEach(function (e) {
    e.addEventListener("click", function () { 

        eq = {
        img: this.children[0].querySelector("img").src,
        name: this.children[0].querySelector("h3").innerHTML,
        text: this.children[1].querySelector("p").innerHTML,
        };
        localStorage.setItem("equipment",JSON.stringify(eq));
    });
});
} else {
    function setInformation() {
    document.querySelector(".proInfo img").src = JSON.parse(localStorage.equipment).img;
    document.querySelector(".proInfo h2").innerHTML = JSON.parse(localStorage.equipment).name;
    document.querySelector(".proInfo p").innerHTML = JSON.parse(localStorage.equipment).text;
};

setInformation();
};
let bottom = document.querySelector(".buttom button");
let cards = document.querySelectorAll(".container .card");
bottom.onclick = function () {
    if (bottom.innerHTML == "More") {
        bottom.innerText = "less";
        for (let i = 5; i < cards.length; i++) {
            cards[i].classList.remove("hidden");
        };
    } else {
        bottom.innerText = "More";
        for (let i = 5; i < cards.length; i++) {
            cards[i].classList.add("hidden");
        };
    };
};
