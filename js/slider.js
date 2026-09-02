const links = document.querySelectorAll(".itemLinks");
links.forEach(link => {
    link.addEventListener("click",function (e) {
        links.forEach(l =>l.classList.remove("active"));
        const clickedlink = e.currentTarget;
        const position = clickedlink.getAttribute("data-pose");
        const translatevalue = `translate3d(${position * 25}%, 0px, 0)`;
        document.querySelector("#wrapper").style.transform = translatevalue;
        clickedlink.classList.add("active");
    }
    );
});
if (links.length > 0) {
    links[0].classList.add("active");
}