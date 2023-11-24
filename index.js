const express = require("express");

const port = 5000;

//initialize express
const app = express();

app.listen(port, () => { console.log('server started'); } );
