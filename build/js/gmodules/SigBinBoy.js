import Tindex from "../index.js";

function SigBinBoy(){
    let mainIndex = null;
    let deferUpdate = false;
    let thisPage = null;
    let routeTable = {};
   
    //create a custom HTML Element
    //document.createElement('x'); 
    let sigbinBoy = document.createElement('SigBinBoy'); //this is taga salo to all unfound element
    String.prototype.i = function(value){
        let a = this.valueOf();
        if (a[0]==='#'){
            let b = document.getElementById(a.replace("#",""));
            if (b) b.innerHTML = value;
        }else
        if (a[0]==='.'){
            let x = document.getElementsByClassName(a.replace(".",""));
            let v = value;
            if (x) for (let data of x){
                data.innerHTML = v;
            }
        }
    }    
    
    String.prototype.e = function(index=-1){
        let ret = sigbinBoy;
        let a = this.valueOf();
        if (a[0]==='#'){
            let b = document.getElementById(a.replace("#",""))
            if (b) ret = b;
            return ret;
        }else
        if ((a[0]==='.')&&(index === -1)) {
            let b = document.getElementsByClassName(a.replace(".",""));
            if (b) ret = b;
            return ret;
        }else
        if ((a[0]==='.')&&(index !== -1)) {
            let b = document.getElementsByClassName(a.replace(".",""));
            if (b) ret = b;
            return ret[index];
        }
    }
    
    String.prototype.actionOneDOM = function(DOMDesignCallback,DOMListenerDeclarationCallback=null){
        let routes = {};
        let prevcards = "";
        let rootDOMID = this.valueOf();
        setInterval(()=>{
            let cards = "";
            cards = DOMDesignCallback() 
            if (prevcards === cards) return; 
            if (cards!==null) rootDOMID.i(cards); 
            if (DOMListenerDeclarationCallback) DOMListenerDeclarationCallback();
            prevcards = cards;
        },100);      
    }

    String.prototype.monitorOneDOM = function(DOMDesignCallback){
        let rootDOMID = this.valueOf();
        let prevcards = null;
        setInterval(()=>{
            let cards = DOMDesignCallback().toString();
            if (prevcards === cards) return; 
            if (rootDOMID.e() === null) return; 
            if (cards!==null) rootDOMID.i(cards);
            prevcards = cards;
        },100);
    }

    String.prototype.listenLinkToVal = function(DOMDesignCallback,DOMListenerDeclarationCallback=null){
        let prevcards = "";
        let rootDOMID = this.valueOf();
        setInterval(()=>{
            let cards = "";
            cards = DOMDesignCallback() 
            if (prevcards === cards) return; 
            if ((cards!==null)&&(rootDOMID.e())) rootDOMID.i(cards); 
            if (DOMListenerDeclarationCallback) DOMListenerDeclarationCallback();
            prevcards = cards;
        },100);      
    }

    String.prototype.linkToVal = function(DOMDesignCallback = null){
        let rootDOMID = this.valueOf();
        let prevcards = null;
        setInterval(()=>{
            if (deferUpdate) return;
            let cards = "";
            if (DOMDesignCallback) cards = DOMDesignCallback().toString();
            if (prevcards === cards) return; 
            if (rootDOMID.e() === null) return; 
            if (cards!==null) rootDOMID.i(cards);
            prevcards = cards;
        },100);
    }

    String.prototype.linkToArray = function(ArrayVariableCallback, DOMDesignCallback=null){
        let rootDOMID = this.valueOf();
        let prevcards = "";
        setInterval(()=>{
            if (deferUpdate) return;
            let cards = "";
            let ArrayVariable = ArrayVariableCallback();
            if (ArrayVariable === null) return;
            cards = ArrayVariable.map((arrayItem) => DOMDesignCallback(arrayItem) ).join("");
            if (prevcards === cards) return; 
            if ((cards!==null)&&(rootDOMID.e())) rootDOMID.i(cards); 
            prevcards = cards;
        },100);      
    }    

    String.prototype.onchange = function(DOMValueChangedCallBack){
        let rootDOMID = this.valueOf();
        setInterval(() => {
            rootDOMID.e().onchange = (ev) => {
                DOMValueChangedCallBack(ev)
            };
        }, 100);
    }

    String.prototype.onclick = function(DOMOnClickedCallBack){
        let rootDOMID = this.valueOf();
        setInterval(() => {
            rootDOMID.e().onclick = (ev) => {
                DOMOnClickedCallBack(ev)
            };
        }, 100);
    }

    String.prototype.jsx = async function(addPath=""){
        let path = "\\js\\fragments"+addPath+"\\"+this.valueOf()+".jsx";
        let x = await fetch(path);
        let z = x.text()
        return z;
    }  

    function getIndexPage(){
        return mainIndex
    }
    function requestInput(value){
        deferUpdate = value;
    }

    function setThisPage(value){
        thisPage = value;
    }

    let thisPageIsShown = false;
    document.onreadystatechange = () => {
        if (document.readyState === 'complete'){
            setInterval(() => {
                if(thisPage && !thisPageIsShown) {
                    thisPageIsShown = true;
                    mainIndex = thisPage();
                }},100);
        }
    }

    function registerLink (routePath, linkDOM_id, routeList, getCurrentPageCallBack){
        routeTable = routeList;
        setInterval(()=>{
            let el = `${linkDOM_id}`.e();
            if (el === null) return;
            el.onclick = (e) => {
                "#menuSelected".e().checked = false; // close/hide main menu
                window.history.pushState({}, routePath, window.location.origin + routePath);
                let currentPage = routeList[window.location.pathname].HTML();
                getCurrentPageCallBack(currentPage); //execute callback function from index.js
                //return false;
            }
        },100);
    }
    
    //gets the remaining height of window minus the header
    function getRemainingHeight(){
        return (window.innerHeight - "#header".e().clientHeight - 1);
    }

    function hop(routpath){
        getIndexPage().navigate(routpath);
    }

    return {requestInput,setThisPage, registerLink, requestInput, getRemainingHeight, getIndexPage, hop}
}

let sigbin = SigBinBoy();
sigbin.setThisPage(Tindex);

export default sigbin;

//window.location.href = "/#top";
//navigate to DOM, can also navigate to page
//or window.open(window.location.origin+"/"+url, '_blank').focus();
//to open a page to another tab