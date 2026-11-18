const bars = document.querySelector("#bars");
const menu = document.querySelector("#nav-menu");
const icon = document.querySelector("#bars > i");
 
const openNav = () => {
    /* navigation */
    const isOpen = menu.classList.toggle("show");

    /* icon */
    icon.classList.toggle("fa-bars", !isOpen);
    icon.classList.toggle("fa-xmark", isOpen);
    /* aria-expanded */
   const expanded = bars.getAttribute("aria-expanded") === "true";
bars.setAttribute("aria-expanded", expanded ? "false" : "true");
bars.setAttribute("aria-label", expanded ? "åben navigation" : "luk navigation");
 
}
 
bars.addEventListener("click", openNav);