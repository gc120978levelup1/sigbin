import dfetch    from "./gmodules/dfetch.js";
import SigBinBoy from "./gmodules/SigBinBoy.js";
import mainmenu  from "../pageMiscs/mainmenu.js";
import header    from "../pageMiscs/header.js";
import page404   from "../pageMiscs/page404.js"

const Tindex = () => {   //work
    let navigateRequest = [];
    let pageBody = "";
    let menu = mainmenu( (currentPage)=>{
        pageBody = currentPage;
    });
    //let footerContent = footer();
    //Start of router function
    menu.registerAllLinks();
    let router = menu.route(window.location.pathname); // take the address from the browser address bar and figure out what is the corresponding page to show
    if (router) pageBody = router.HTML(); else {
        // make a page not found page here
        //pageBody = "<h1 style='color:red;text-align:center;align-items:center;width:100%'>⚠️ Page Requested is not found. ⚠️<br/>⚠️ You reached the end of the line.... ⚠️</h1>"
        pageBody = page404.HTML();
    }
     //this is when the user enters an address in the address bar
    window.onpopstate = () => { //this is when the user press the back/forward button of the browser
        let router = menu.route(window.location.pathname);
        if (router) pageBody = router.HTML(); else {
            // make a page not found page here
            //pageBody = "<h1 style='color:red;text-align:center;align-items:center;width:100%'>⚠️ Page Requested is not found. ⚠️<br/>⚠️ You reached the end of the line.... ⚠️</h1>"
            pageBody = page404.HTML();
        }
    }

    function navigate(path){
        navigateRequest.push(path);
    }

    function fetchnavigateRequest(){
        if (navigateRequest.length > 0)
            return navigateRequest.shift();
        else
            return null
    }

    setInterval(() => {
        let nav = fetchnavigateRequest()
        if (nav !== null){
            window.history.pushState({}, nav, window.location.origin + nav);
            let router = menu.route(nav);
            if (router) pageBody = router.HTML(); else {
                pageBody = page404.HTML();
            }
        }
    },100);

    // assign web objects to HTML DOM Tags/components
                 "#menu".linkToVal ( () => menu.HTML() );
        "#pageContainer".linkToVal ( () => pageBody );
    "#pageHeaderContent".linkToVal ( () => header.HTML() );
    //"#pageFooterContent".linkToVal ( () => footer.HTML() );

    return {navigate};
}

//every js that has a corresponding HTML page 
//must call SigBinBoy to function properly

export default Tindex;