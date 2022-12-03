
function post(URL, payLoadJSONData, onFetchDoneCallback = null){
    fetch(URL, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Accept'                     : 'application/json',
            'Content-Type'               : 'application/json'
        },
        method: "POST",
        body: JSON.stringify(payLoadJSONData)
    }).then((data)=>data.json()).then((data)=>{
        // fetch json data here 
        // from fetch transaction
        // promise
        if(onFetchDoneCallback = null) onFetchDoneCallback(data);
    });
}

function get (URL, onFetchDoneCallback){
    fetch(URL, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Accept'                     : 'application/json',
            'Content-Type'               : 'application/json'
        },
        method: "GET",
        body: null
    }).then((data)=>data.json()).then((data)=>{
        // fetch json data here 
        // from fetch transaction
        // promise
        if(onFetchDoneCallback) onFetchDoneCallback(data);
    });
}



export default {post,get}

