// this page is shown when the page path entered is
// not found in the routing list table as listed
// the mainmenu.js
import footer from "./footer.js";

const Tpage404 = () => {
    function HTML(){
      return HTMLValue;
    }
    /* Start of JS Add Code Here */

    /**/

    /* Endin of JS Add Code Here */
    const HTMLValue=/*html*/`

                    <div style='
                                  min-height : 100%;
                                  height : 100%;
                                  display: grid;
                                  grid-template-rows: calc(1fr/2) 1fr auto;
                                  grid-gap : 20px;
                                '>
                          <div></div>
                          <div>

                                <h1 style='
                                            color:red;
                                            text-align:center;
                                            align-items:center;
                                            width:100%
                                        '>
                                    ⚠️ Page Requested is not found. ⚠️<br/>
                                    ⚠️ You reached the end of the line.... ⚠️
                                </h1>

                          </div>
                          <div>
                               ${footer.HTML()}
                          </div>
                      </div>
                      
    `;
    return {HTML}
}
let page404 = Tpage404();
export default page404;