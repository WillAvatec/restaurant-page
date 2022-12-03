import { createHelper } from "./website";

export default function Footer (){
    let section = createHelper("section","footer",content);
    let footer_cont = createHelper("div","footer-container",section);
    let p = createHelper("p",false,footer_cont);
    let gitLink = createHelper("a",false,p);
    let link = gitLink.textContent = "avatec2312";
    
    return
}