const mongoose = require('mongoose')

const mongoURI = 'mongodb://avduttehare:Avadhut1183@ac-j3jyszp-shard-00-00.s4vqvqa.mongodb.net:27017,ac-j3jyszp-shard-00-01.s4vqvqa.mongodb.net:27017,ac-j3jyszp-shard-00-02.s4vqvqa.mongodb.net:27017/ATFoodCart?ssl=true&replicaSet=atlas-a45pw7-shard-0&authSource=admin&retryWrites=true&w=majority'

module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        
        if (err) console.log("---" + err)
        else {
            
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("foodCategory");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
        }
    })
};
