const app = require("./src/app")
const mongoose = require("mongoose")

function connectToDb(){
    mongoose.connect("Your Database URI goes here...")
    .then(() => {
        console.log("Connected to Database!")
    })
}

connectToDb();

app.listen(3000, ()  => {
    console.log("server is running at port:3000")
})