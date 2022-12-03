import paramHook from "../js/gmodules/paramHooks.js"
import sigbin from  "../js/gmodules/SigBinBoy.js";
const Ttest = () => {
    function HTML(){ //window.innerHeight
      /* Start of JS Add Code Here */
      /**/
      let name;
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
      });
      
      /* Endin of JS Add Code Here */
      const HTMLValue=/*html*/` 
            <div class='test-padding'>
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
            </div>

      `;return HTMLValue;
    }
    return {HTML}
}
let test = Ttest();
export default test;