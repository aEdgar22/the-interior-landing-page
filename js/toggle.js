export default function HamburgerMenu(navToggle, navBar, menuLink) {

    const d = document;

    d.addEventListener("click",(e)=>{
        if(e.target.matches(navToggle) || e.target.matches(`${navToggle} *`)){
            d.querySelector(navBar).classList.toggle("is-active");
            d.querySelector(navToggle).classList.toggle("is-active");
        }

        if(e.target.matches(menuLink)){
            d.querySelector(navBar).classList.remove("is-active");
            d.querySelector(navToggle).classList.remove("is-active");
           
        }
    });
}