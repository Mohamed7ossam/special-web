const links = document.querySelectorAll(".itemLinks");
const description = document.querySelectorAll("#DescriptionContainer .Description");
links.forEach(link => {
    link.addEventListener("click",function (e) {
        links.forEach(l =>l.classList.remove("active"));
        const clickedlink = e.currentTarget;
        const position = clickedlink.getAttribute("data-pose");
        const translatevalue = `translate3d(-${position * 25}%, 0px, 0)`;
        document.querySelector("#wrapper").style.transform = translatevalue;
        clickedlink.classList.add("active");
        description.forEach(desc => desc.style.display = "none");
        const activeDesc = document.querySelector(`#DescriptionContainer .Description[data-pose="${position}"]`);
        if (activeDesc) {
            activeDesc.style.display = "block";
        }
    }
    );
});
if (links.length > 0) {
    links[0].classList.add("active");
}
if (description.length > 0) {
    description[0].style.display = "block";
}