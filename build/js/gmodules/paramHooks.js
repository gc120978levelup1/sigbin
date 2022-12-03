/*

 data passing between pages hence avoids
props drilling

*/
function gc2(contextID="3246544trhr34eer"){
    let ctxID = contextID;
    function getValue(){
        return JSON.parse(window.localStorage.getItem(ctxID))
    }
    function setValue(jsonData){
        if (jsonData !== null)
            window.window.localStorage.setItem(ctxID,JSON.stringify(jsonData));
        else
            window.window.localStorage.setItem(ctxID, null);
    }
  return {getValue,setValue};
}

function getPageParam(pageTagID){
    return gc2(pageTagID).getValue()
}

function setPageParam(pageTagID, JSONDataPayLoad){
    gc2(pageTagID).setValue(JSONDataPayLoad)
}

function flushParam(pageTagID){
    gc2(pageTagID).setValue(null)
}

export default {getPageParam, setPageParam, flushParam}

// pageTagID is the ID of the page being called
//   callers should use setPageParam(pageTagID, JSONDataPayLoad) before calling a page
//                input: pageTagID       -> Tag ID of Callee Page (string value)
//                       JSONDataPayLoad -> a json data, not in text format ha.
//               output: void            -> nothing, nada!

//   callee Page should use getPageParam(pageTagID) before loading page
//                input: pageTagID       -> Tag ID of Callee Page (string value)
//               output: JSONDataPayLoad -> a json data, not in text format ha.