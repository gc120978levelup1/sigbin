/*

GlobalContext Simplyfies data passing between pages hence avoids
props drilling

*/
function gc(contextID="fji4jh2342u423"){
    let ctxID = contextID;
    function getValue(){
        return JSON.parse(window.sessionStorage.getItem(ctxID))
    }
    function setValue(jsonData){
        window.sessionStorage.setItem(ctxID,JSON.stringify(jsonData));
    }
  return {getValue,setValue};
}

function getContext(contextName){
    return gc(contextName).getValue()
}

function saveContext(contextName, JSONDataPayLoad){
    gc(contextName).setValue(JSONDataPayLoad)
}

export default {getContext, saveContext}

// parameterName is the name of the context or memory being re-called
//   context encoder should use saveContext(parameterName, JSONDataPayLoad)
//                input: parameterName   -> name of context being saved (string value)
//                       JSONDataPayLoad -> a json data, not in text format ha.
//               output: void            -> nothing, nada!

//   context use/recaller should use getContext(pageTagID)
//                input: parameterName   -> name of context being accessed (string value)
//               output: JSONDataPayLoad -> a json data, not in text format ha.
