import { createHelper } from "../website";
import Logo from "../../assets/logo.png";

export default function (){
    let section = createHelper("section","presentation",content);
    let text_container = createHelper("div","text-container",section);
    const logo = new Image();
    logo.src = Logo;
    text_container.appendChild(logo);

    return
}