import createHeader from './header';
import createPresentation from './main-content';
import createFooter from './footer';

export default function Initialize (){

    createHeader();
    createPresentation();
    createFooter();

    return links
}



export const createHelper = (create,clName,parent)=>{
    const content = document.querySelector("#content");
    let element = document.createElement(create);
    if(clName) element.className = clName;
    parent.appendChild(element);
        
    return element;
}

export const cleanContent = ()=>{
    const content = document.querySelector(".presentation");
    content.innerHTML = "";
}