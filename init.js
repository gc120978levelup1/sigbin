
/*
function isSecure(req) {
    if (req.headers['x-forwarded-proto']) {
      return req.headers['x-forwarded-proto'] === 'https';
    }
    return req.secure;
  };
  */

                    require  ("dotenv").config;         // environent variables
       const path = require  ("path");                  // nodejs server localized path
 const publicPath = path.join(__dirname, "", "/build"); // complete localized path of frontend source
     const logger = require  ('morgan');                // automatic logger
    const express = require  ("express");               // siplified http connections
       const cors = require  ('cors');                  // cross-origin resource sharing
       const app  = express  ();                        // initialize express application       
       const port = process.env.PORT || 5000;           // port assignent to listen to

app.use(logger('dev'));                                 // logging mechanism   
app.use(cors());                                        // enable cross-origin resource sharing
app.use(express.json({limit: '50mb'}));                 //make json serializer available

function frontEndRouter(req, res) {
    res.sendFile(path.join(publicPath,"index.html")); // front end entry point
}

app.use(express.static(publicPath));// assign front end path
//*************************** BACKEND API ROUTE HANDLING ****************************************/


//*************************** BACKEND API ROUTE HANDLING ****************************************/
app.get("*", frontEndRouter); // frontend stack router

// start node js full stack server
{ // remote server
app.listen({port: port}, async () =>{
    console.log("API Server is UP!");
    console.log('Database Connected!');
});
}

//heroku migration
//$heroku config --app jaedweb
//$heroku run sequelize db:migrate --env production -m --app jaedweb
//$heroku run npx sequelize-cli db:migrate
//$heroku run npx sequelize-cli db:seed:all