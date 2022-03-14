const { MongoClient } = require("mongodb");

const url = "mongodb+srv://dbwj:qlalfqjsgh@db1.3hvit.mongodb.net/db1?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "db1";
async function run(){
    try{
        await client.connect();
        console.log("connected");
    }
    catch(err){
        console.log(err.stack);
    }
    finally{ client.close();}
}

run().catch(console.dir)