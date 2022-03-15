const { MongoClient } = require("mongodb");

//mongodb server 와 연결하는 url
const url = `mongodb+srv://${id}:${pw}@db1.3hvit.mongodb.net/${dbName}?retryWrites=true&w=majority`;

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