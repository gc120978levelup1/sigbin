import paramHook from "../js/gmodules/paramHooks.js"
const Ttestsubmitreceiver = () => {
    function HTML(){ //window.innerHeight
      /* Start of JS Add Code Here */
      /**/
      
      let data = paramHook.getPageParam("testsubmitreceiver")
      paramHook.flushParam("testsubmitreceiver");
      console.log(data);
      
      let name;
      let email;
      let phone;

      if (data){
        name = data.name;
        email = data.email;
        phone = data.phone;
      }

      /* Endin of JS Add Code Here */
      const HTMLValue=/*html*/` 
            <div class='test-padding'>
                <div>Full Screen Less the Header - test receiver</div>
                <div><hr/></div>
                <div><h1>Hello World</h1></div>
                <div><hr/></div>
                <div class='testr-form'> 
                           Name
                           <input id="test-name" value='${name}'  type="text"  class="whiteInp" />
                           Email
                           <input id='test-email' value='${email}' type="email" class="whiteInp" />
                           Phone
                           <input id='test-phone' value='${phone}' type="tel"   class="whiteInp" />
                           <div class='test-button-container'>
                                <button id="test-submit" class='blueB'>OK</button>
                           </div>
                </div>
            </div>

      `;return HTMLValue;
    }
    return {HTML}
}

let testsubmitreceiver = Ttestsubmitreceiver();
export default testsubmitreceiver;