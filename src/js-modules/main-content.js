import { createHelper } from "./website";

export default function createPresentation (){
    let section = createHelper("section","presentation",content);
    let text_container = createHelper("div","text-container",section);
    let marca = createHelper("p","marca",text_container);
    let p = createHelper("p",false,text_container);
    let logo = marca.textContent = "Gabriela";
    let subtitle = p.textContent = "Taberna & Restaurant";
    return
}
