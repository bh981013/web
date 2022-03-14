
//Query exercises in https://www.w3resource.com/mongodb-exercises/#PracticeOnline

const { MongoClient } = require("mongodb");

const dbName = "sample_restaurants";
const url = `mongodb+srv://dbwj:qlalfqjsgh@db1.3hvit.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(url);
async function run(){
    try{
        //prepare connection
        await client.connect();
        const db = client.db(dbName);
        


        let query = {}
        let project = {}

        
        //question 4
        query = {

        };

        project = {
            "restaurant_id": 1,
            "name": 1,
            "borough": 1,
            "address.zipcode": 1,
            "_id": 0
        };


        //question 5 & 6
        query = {
            "borough": "Bronx"
        };

        project = {
            
        };

        //question 8
        query = {
            "grades" : { $elemMatch:{"score": {$gt: 90}}}
        };

        project = {
            "name": 1,
            "grades.score": 1,
        };

        //question 8-2
        query = {
            "grades.score" :  {$gt: 90}
        };

        project = {
            "name": 1,
            "grades.score": 1,
        };

        //question 9

        //send query
        const myDoc = await db.collection("restaurants").find(query).project(project).limit(5).toArray();
       
        await myDoc.forEach(d => console.log(d));
        
        //console.log(myDoc);
    }
    catch(err){
        console.log(err.stack);
    }
    finally{ client.close();}
}

run().catch(console.dir)