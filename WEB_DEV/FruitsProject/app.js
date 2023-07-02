const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);



async function run() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);

        /*
        // Create a single new object
        await createObject(client,
             {
            name: 'Apple',
            score: 8,
            review: 'Great fruit!'
            }
        );

        // Create list of new objects
        await createMultipleObjects(client, [
            {
                name: 'Orange',
                score: 6,
                review: 'Kinda sour'
            },
            {
                name: 'Banana',
                score: 9,
                review: 'Great stuff!'
            },
        ]);
*/
        //Find one object by Name
        await findObjectByName(client, "Apple");

        //Find multiple objects based on a minimum threshold upto a certain limit
        await findObjectByMinimumThreshold(client, {
            mininumScore: 7,
            maximumNumberOfResults: 2
        });

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

/**
 * Print the names of all available databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
 */
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

/**
 * Create a new object in DB
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the database
 * @param {Object} object The new object to be added
 */
async function createObject(client, object){
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertOne for the insertOne() docs
    const result = await client.db("fruitsDB").collection("fruits").insertOne(object);
    console.log(`New object created with the following id: ${result.insertedId}`);
}

/**
 * Create multiple objects in DB
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the sample_airbnb database
 * @param {Object[]} objects The new list of objects to be added
 */
async function createMultipleObjects(client, objects){
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#insertMany for the insertMany() docs
    const result = await client.db("fruitsDB").collection("fruits").insertMany(objects);

    console.log(`${result.insertedCount} new object(s) created with the following id(s):`);
    console.log(result.insertedIds);
}

/**
 * Print an object with the given name
 * Note: If more than one object has the same name, only the first listing the database finds will be printed.
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the database
 * @param {String} objectName The name of the object you want to find
 */
async function findObjectByName(client, objectName) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    const result = await client.db("fruitsDB").collection("fruits").findOne({ name: objectName });

    if (result) {
        console.log(`Found an object in the collection with the name '${objectName}' :`);
        console.log(result);
    } else {
        console.log(`No objects were found in the collection with the name '${objectName}'`);
    }
}

/**
 * Print objects based on a mininum threshold.
 * @param {MongoClient} client A MongoClient that is connected to a cluster with the database
 * @param {object} queryParams The query params object
 * @param {number} queryParams.mininumScore The minimum score
 * @param {number} queryParams.maximumNumberOfResults The maximum number of objects to be printed
 */
async function findObjectByMinimumThreshold(client, {
    mininumScore = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER
}) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find for the find() docs
    const object = client.db("fruitsDB").collection("fruits").find({ score: { $gte: mininumScore } }).limit(maximumNumberOfResults);

    // Store the results in an array
    const results = await object.toArray();
    
    if (results.length > 0) {
        console.log(`Found object(s) with at least '${mininumScore}' score`);
        results.forEach((result, i) => {
            console.log();
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   score: ${result.score}`);
            console.log(`   review: ${result.review}`);
        });
    } else {
        console.log(`No objects were found in the collection with the greater than '${mininumScore}' score`);
    }
}


run().catch(console.dir);