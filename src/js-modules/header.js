import { createHelper } from "./website";

export default function createHeader(){
    let section = createHelper("section","head",content);
    let nav = createHelper("nav",false,section);
    let homeLink = createHelper("a","home",nav);
    homeLink.textContent = 'Home';
    let menuLink = createHelper("a","menu",nav);
    menuLink.textContent = 'Menu';
    let contactLink = createHelper("a","contact",nav);
    contactLink.textContent = 'Contact Us';

    return {homeLink, menuLink, contactLink}

}
