const buttonSearch = document.querySelector("#page-home main a");

buttonSearch.addEventListener("click", ()=>{
    document.querySelector(".modal").classList.toggle("hide");
})