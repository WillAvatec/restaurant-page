import createHeader from './js-modules';
import createPresentation from './main-content.js';
import createFooter from './footer.js';

export default function Initialize (){

    createHeader();
    createPresentation();
    createFooter();

    return
}

export const createHelper = (create,clName,parent)=>{
    const content = document.querySelector("#content");
    let element = document.createElement(create);
    if(clName) element.className = clName;
    parent.appendChild(element);
        
    return element;
}