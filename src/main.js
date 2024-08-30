import { Client, Databases } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  // Why not try the Appwrite SDK?
  //
  let client = new Client();
  client.setEndpoint(process.env.ENDPOINT_URL)
      .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
      .setKey(process.env.APPWRITE_API_KEY)
  
  const databases = new Databases(client);
  const buildingDatabaseID = process.env.BUILDING_DATABASE_ID;
  const sensorCollectionID = process.env.SENSOR_COLLECTION_ID;
  const mqtt_url =  process.env.MQTT_URL;
  const mqtt_applicationID = process.env.MQTT_APPLICATION_ID;
  const logCollectionId = "66d18cd100349aec7523";

  // You can log messages to the console
  log('Hello, Logs!');
  await logAppwrite("Hello, Logs!");
  // If something goes wrong, log an error
  error('Hello, Errors!');

  try {
    await databases.createDocument(buildingDatabaseID, logCollectionId, ID.unique(), {
      log: "test",
      time: new Date().toISOString(),
      type: "MQTT_AppWrite"
    });
    log('Log ooke');
  } catch (error) {
    error('Log not ooke');
  }
  

  // The `req` object contains the request data
  if (req.method === 'GET') {
    // Send a response with the res object helpers
    // `res.send()` dispatches a string back to the client
    return res.send('Hello, World!');
  }

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};


// Write a function for input is String of Log, and output is a new document in Log Collection
