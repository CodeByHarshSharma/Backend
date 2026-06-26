const app = require("./src/app")
const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("mongodb+srv://mailittoharsh_db_user:AOIHttwxrLWdeFlG@cluster0.jopknbt.mongodb.net/day-5")
    .then(() => {
        console.log("Connected to Database!")
    })
}

connectToDb();

app.listen(3000, ()  => {
    console.log("server is running at port:3000")
})