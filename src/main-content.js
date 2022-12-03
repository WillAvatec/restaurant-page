import { createHelper } from "./js-modules/website";

export default function createPresentation (){
    let section = createHelper("section","presentation",content);
    let text_container = createHelper("div","text-container",section);
    let marca = createHelper("p","marca",text_container);
    createHelper("p",false,text_container);
}
