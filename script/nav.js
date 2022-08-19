const hamburger = document.querySelector("#hamburger"),
      navigation = document.querySelector("#navigation");


hamburger.addEventListener("click",()=>{
    document.body.toggleAttribute("no-scroll")
    navigation.classList.toggle("display")
})