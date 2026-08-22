function toggleMenu(){
  document.getElementById("nav").classList.toggle("open");
}
document.querySelectorAll("nav a").forEach(link=>{
  link.addEventListener("click",()=>document.getElementById("nav").classList.remove("open"));
});

function scrollDrinks(direction) {

    const slider = document.getElementById("drinkSlider");
    const card = slider.querySelector(".drink-card");

    slider.scrollBy({
        left: direction * card.offsetWidth,
        behavior: "smooth"
    });
}
