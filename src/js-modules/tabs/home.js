import { createHelper } from "../website";
import Logo from "../../assets/logo.png";

export default function (){
    let section = document.querySelector('.presentation');
    const logo = new Image();
    logo.src = Logo;
    section.appendChild(logo);

    return
}