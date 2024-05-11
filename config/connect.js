import mongoose from "mongoose";

const connection_url = `mongodb+srv://app:1234@app.agczyd5.mongodb.net/`

const connect = () => {
    if(process.env.NODE_ENV !== 'production'){
        mongoose.set("debug", true)
    }

    mongoose.connect(connection_url, {
        dbName : "project"
    })
    .then(()=>{
        console.log("connected to mongoDB")
    })
    .catch((err) =>{
        console.log(`Connected fail to MongoDB`)
        console.error(err)
    })
}

export default connect;