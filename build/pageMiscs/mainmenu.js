import sigbin     from "../js/gmodules/SigBinBoy.js";

//   First Step
//import all the available pages here
import main                from "../pages/main.js";
import work                from "../pages/work.js";
import portfolio           from "../pages/portfolio.js";
import contacts            from "../pages/contacts.js";
import test                from "../pages/test.js"
import testsubmitreceiver  from "../pages/testsubmitreceiver.js";

const router = (getCurrentPageCallBack) => {
    function HTML(){
        return HTMLValue;
     }
    function route(routePath){
        return routeList[routePath];
    }
    
    //   Second Step
    // List all the known pages together with its
    // corresponding virtual route path
    const routeList = {
                          '/' : main,
                      '/test' : test,
                '/index.html' : main,
                      '/work' : work,
                 '/portfolio' : portfolio,
                  '/contacts' : contacts,
        '/testsubmitreceiver' : testsubmitreceiver,
    };

    //   Third Step    
    // Register and Initialize main menu links here from 
    // these will appear in the right hand side as a 
    // hamburger menu,
    // note: do not register links that are used to download files
    function registerAllLinks(){

        // This are the links that apprears in the main menu
        sigbin.registerLink('/index.html'  ,"#homeLink"     , routeList, getCurrentPageCallBack);
        sigbin.registerLink('/test'        ,"#test"         , routeList, getCurrentPageCallBack);
        sigbin.registerLink('/portfolio'   ,"#portfolioLink", routeList, getCurrentPageCallBack);
        sigbin.registerLink('/work'        ,"#workLink"     , routeList, getCurrentPageCallBack);
        sigbin.registerLink('/contacts'    ,"#contactLink"  , routeList, getCurrentPageCallBack);

        // This are the links that apprears else where other than the main menu
        sigbin.registerLink('/contacts'    ,"#contactLink2"  ,routeList, getCurrentPageCallBack); // found in main page

    }// end of registerAllLinks()

    //    Forth Step
    // design the individual options/selections that would appear in the 
    // hamburger menu in the upper right side of the web app screen 
    const HTMLValue = /*fragented*//*html*/`

        <a href="" id="homeLink">
            <li>Home</li>
        </a>

        <a href="" id="test">
            <li>Testing</li>
        </a>

        <a href="" id="portfolioLink">
            <li>Portfolio</li>
        </a>
        
        <a href="" id="workLink">
            <li>Work</li>
        </a>
        
        <a href="" id="contactLink">
            <li>Contact</li>
        </a> 

    `;//End of fragented html
    return {route,HTML,registerAllLinks,getCurrentPageCallBack}
}

export default router;