import { createHelper } from "./website";
import home from "./tabs/home"

export default function FirstLoadMain (){

    let logo_container = createHelper("section","presentation",content);
    home();
    return;
}