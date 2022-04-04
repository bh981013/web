//id & pw
const id = "dbwj";
const pw = "qlalfqjsgh";

//Query exercises in https://www.w3resource.com/mongodb-exercises/#PracticeOnline

const { MongoClient } = require("mongodb");
const dbName = "sample_restaurants";
const url = `mongodb+srv://${id}:${pw}@db1.3hvit.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(url);
async function run(){
    try{
        //prepare connection
        await client.connect();
        const db = client.db(dbName);        


        let query = {}
        let project = {}
        
        //question 9
        query = {
           // $and: [ {"grades.score": {$gte: 80}}, {"grades.score": {$lte: 90}} ] 
        }
        project = {
            
        };

        //send query
        const myDoc = await db.collection("restaurants").find(query).project(project).limit(5).toArray();
        console.log(myDoc.map(({name}) => name));

        //await myDoc.forEach(d => console.log(d));
        
        //console.log(myDoc);n
    }
    catch(err){
        console.log(err.stack);
    }
    finally{ client.close();}
}

run().catch(console.dir)