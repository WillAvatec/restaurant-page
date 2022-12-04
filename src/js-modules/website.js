import createHeader from './header';
import FirstLoadMain from './main-content';
import createFooter from './footer';

export default function Initialize (){

    let links = createHeader();
    FirstLoadMain();
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