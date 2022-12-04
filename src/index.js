import Initialize, {cleanContent} from './js-modules/website';
import home from './js-modules/tabs/home';
import menu from './js-modules/tabs/menu';
import './style.css';


let links = Initialize();

links.homeLink.addEventListener("click",()=>{
    cleanContent();
    home();
    return
})

links.menuLink.addEventListener("click",()=>{
    cleanContent();
    menu();
    return
})