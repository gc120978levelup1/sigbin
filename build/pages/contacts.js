import footer from "../pageMiscs/footer.js"

const Tcontacts = () => {
  function HTML(){ //window.innerHeight
    /* Start of JS Add Code Here */

    /* Endin of JS Add Code Here */
    // example of a sticky footer shown below

    const HTMLValue=/*css*//*html*/` 
    
                      <div style='
                                  min-height : 100%;
                                  height : 100%;
                                  display: grid;
                                  grid-template-rows: calc(1fr/2) 1fr auto;
                                  grid-gap : 20px;
                                '>
                          <div></div>
                          <div>
                            <section class="contact">
                                There are risks and costs to action.
                                But they are far less than the long
                                range risks of comfortable inaction.
                                <br/>
                                <i>-John F. Kennedy</i>
                                <br/>
                                <br/>
                                Let's get in touch
                                <br/>
                                <br/>
                                <div class="button-holder">
                                    <button class="content-button"><a href="./resume1.pdf">Résumé</a></button>
                                    <button class="content-button"><a href="mailto:gc120978levelup1@gmail.com">Email</a></button>
                                    <button class="content-button"><a href="https://www.linkedin.com/in/garry-cacho-28248390">Linkedin</a></button>
                                </div>
                            </section>
                          </div>
                          <div>
                               ${footer.HTML()}
                          </div>
                      </div>

    `;return HTMLValue;
  }
  return {HTML}
}
let contacts = Tcontacts();
export default contacts;