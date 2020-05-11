const mongoose = require( 'mongoose' );

/* Your code goes here */

const sportCollectionSchema = mongoose.Schema({
        id:{
            type:Number,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        num_players:{
            type:Number,
            required:true
        }
});

const sportCollection = mongoose.model("sports",sportCollectionSchema);

const Sports = {
    addSport : function(id, name, num_players){
        return sportCollection
            .find({id:id})
            .then(event=>{
                throw new Error("The sport already exists");
            })
            .create((newSport)=>{
                return newSport;
            })
            .catch(err=>{
                throw new Error("Something went wrong");
            })
    }
}

module.exports = {
    Sports
};