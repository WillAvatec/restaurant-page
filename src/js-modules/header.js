import { createHelper } from "./website";

export default function createHeader(){
    let section = createHelper("section","head",content);
    let nav = createHelper("nav",false,section);
    
    return section
}
