import { createHelper } from "./website";

export default function createHeader(){
    let section = createHelper("section","head",content);
    let nav = createHelper("nav",false,section);
    for (let i=0;i<5;i++){
        let li = createHelper("li",false,nav);
        let a = createHelper("a",false,li);
        a.textContent = "link"; 
    }

    return section
}
