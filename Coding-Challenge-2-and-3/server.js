const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );
const {Sports} = require('.models/sport-model');
const app = express();


/* Your code goes here */

app.get('/sports/addSport/:sportId',jsonParser,(req,res)=>{
    console.log("entered");
    // console.log(r);
    let name = req.body.name;
    let num_players = req.body.num_players;
    let id = req.body.id;
    let queryId = req.query;
    console.log("queryid", queryId);
    console.log(name);
    if(!name || !num_players || !id){
        res.statusMessage="You lack an element of the query";
        console.log("entered if");
        return res.status(406).end();
    }
    if(id!=queryId){
        res.statusMessage="The ids doesnt match";
        console.log("entered second if");
        return res.status(409).end();
    }
    Sports
        .addSport()
        .then(sport=>{
            console.log("Sport created");
            res.statusMessage="fine";
            return res.status(201).sport.json();

        })
        .catch(err=>{
            throw new Error ("something went wrong");
        });
    res.statusMessage="fine";
    return res.status(201);

});

app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});