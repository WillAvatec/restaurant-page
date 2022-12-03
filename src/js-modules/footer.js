import { createHelper } from "./website";

export default function createFooter (){
    let section = createHelper("section","footer",content);
    let footer_cont = createHelper("div","footer-container",section);
    let p = createHelper("p",false,footer_cont);
    p.innerHtml = `Developed by ${createHelper("a",false,p).textContent = 'avatec2312'} .`
    
    return
}