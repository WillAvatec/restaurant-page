import { createHelper } from "./website";

export default function createFooter (){
    let section = createHelper("section","footer",content);
    let footer_cont = createHelper("div","footer-container",section);
    let p = createHelper("p",false,footer_cont);
    p.innerHTML = 'Developed by <a href="https://github.com/WillAvatec/restaurant-page">avatec2312</a>.';
    
    return
}