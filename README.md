# Introduction
    SigBin Framework, is a purely Visayan technology that harness the sheer 
    power of Vanilla JS. It can be an alternative stepping stone to learn web 
    development before opting for the big dogs like Vue, Angular & React JS Framework.

    It functions like a jQuery framework like using DOM selectors, yet it is 
    prestructured like in React JS. </p>

# Getting Started
    Install the packages first, go to the root folder, then enter in CLI

    $    npm install

    In order to serve the code, go to the root folder, then enter in CLI

    $    npm start

    A local server will be spawned

    $    localhost:5000

# Files and Folders Structure

                  init.js -> the code for serving using node
         build/index.html -> the scaffolding HTML code
    build/index_style.css -> css file for importing custom files from the user
             build/assets -> folder for svg, images, docs and videos
                build/css -> pre loaded style sheets
                 build/js -> the main module for this framework
          build/pageMiscs -> folder that contains prebuilt html structures for the header
                             footer, mainmenu and page404 
              build/pages -> folder that contains the individual page fragments

# Page Fragments

    These files are located in the folder build/pages. It is the basic structure
    in building a page in the web app. for example:

    import paramHook from "../js/gmodules/paramHooks.js" ###  <------------- import files
    import sigbin from  "../js/gmodules/SigBinBoy.js";   ###  <------------- import files
    const Ttest = () => {
    
    function HTML(){ //window.innerHeight
        /* Start of JS Add Code Here */
        /**/
        let name;          ###  <------------- start of page logic
        let email;
        let phone;

        "#test-name".onchange( (ev) => {
            name = ev.target.value;
        });

        "#test-email".onchange( (ev) => {
            email = ev.target.value;
        });

        "#test-phone".onchange( (ev) => {
            phone = ev.target.value;
        });

        "#test-submit".onclick( (ev) => {
            paramHook.setPageParam("testsubmitreceiver",{name, email, phone});
            sigbin.hop('/testsubmitreceiver');
        });               ###  <------------- end of page logic
        
        /* Endin of JS Add Code Here */
        const HTMLValue=/*html*/` 
                <div class='test-padding'>###  <------------- start of page visual design                      
                    <div>Full Screen Less the Header</div>
                    <div><hr/></div>
                    <div><h1>Hello World</h1></div>
                    <div><hr/></div>
                    <div class='test-form'> 
                            Name
                            <input id="test-name"  type="text"  class="whiteInp" />
                            Email
                            <input id='test-email' type="email" class="whiteInp" />
                            Phone
                            <input id='test-phone' type="tel"   class="whiteInp" />
                            <div class='test-button-container'>
                                    <button id="test-submit" class='orangeB'>Submit</button>
                            </div>
                    </div>
                </div>                 ###  <------------- end of page visual design

        `;return HTMLValue;
        }
        return {HTML}
    }
    let test = Ttest();
    export default test;               ###  <------------- name of page fragment object to export

# Route, Links and Main Menu

    the mainmenu.js is located in build/pageMiscs. It contains the navigation logics,
    links and routing list.

    example.

    import sigbin     from "../js/gmodules/SigBinBoy.js";###  <------------- importing of main module

    //   First Step
    //import all the available pages here
    import main      from "../pages/main.js";   ###  <------------- importing of individual page fragment
    import work      from "../pages/work.js";
    import portfolio from "../pages/portfolio.js";
    import contacts  from "../pages/contacts.js";
    import test      from "../pages/test.js"
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
                        '/' : main,           ###  <------------- assigning route address with each corresponding page fragment
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
            sigbin.registerLink('/index.html'  ,"#homeLink"     , routeList, getCurrentPageCallBack);    ###  <------------- creating items in the main menu and
            sigbin.registerLink('/test'        ,"#test"         , routeList, getCurrentPageCallBack);                        same time building link list
            sigbin.registerLink('/portfolio'   ,"#portfolioLink", routeList, getCurrentPageCallBack);
            sigbin.registerLink('/work'        ,"#workLink"     , routeList, getCurrentPageCallBack);
            sigbin.registerLink('/contacts'    ,"#contactLink"  , routeList, getCurrentPageCallBack);

            // This are the links that apprears else where other than the main menu
            sigbin.registerLink('/contacts' ,"#contactLink2"  ,routeList, getCurrentPageCallBack);      ###  <------------- creating non main menu links

        }// end of registerAllLinks()

        //    Forth Step
        // design the individual options/selections that would appear in the 
        // hamburger menu in the upper right side of the web app screen 
        const HTMLValue = /*fragented*//*html*/`

            <a href="" id="homeLink">         ###  <------------- code for list of HTML links for main menu
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

# Element Select

    Like jQuery, sigbin framework is centered on directly manipulating DOM using selectors
    which is the opposite of virtual DOM approach from React. However unlike jQuery,
    sigbin framework can link a state variable with a certain DOM just by implicitely 
    declaring there connectivity. Whenever a DOM is implicitely linked with a state variable,
    what ever value the variable will have in the future can directly affect the DOM 
    being linked to.

## For Example inside the HTML you declare a DOM,
    
    ...
    <div id="value-container" class="some_style"></div>
    <div>
        <button id="increment-button"> Increent Value </button>
    </div>
    ...

## then we dclare linkage between DOM and state variable,

    ...
    let thisStateVariable = 0;
    
    "#value-container".linkToVal( () => thisStateVariable ); // linking DOM and variable

    "#increment-button".onclick( (ev) => {  
        thisStateVariable++; //whenever the button is clicked the variable is incremented
    })
    ...

    eventually the "value-container" div will be updated whenever the variable is changed.


