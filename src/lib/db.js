import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("taskstudy"); // select database

//////////////////////////////////////////
// Modules
//////////////////////////////////////////

// Get all modules
async function getModules() {
  let modules = [];
  try {
    const collection = db.collection("modules");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    modules = await collection.find(query).toArray();
    modules.forEach((module) => {
      module._id = module._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    // TODO: errorhandling
  }
  return modules;
}

// Get module by id
async function getModule(id) {
  let module = null;
  try {
    const collection = db.collection("modules");
    const query = { _id: new ObjectId(id) }; // filter by id
    module = await collection.findOne(query);

    if (!module) {
      console.log("No module with id " + id);
      // TODO: errorhandling
    } else {
      module._id = module._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return module;
}

// create a module
async function createModule(module) {
  try {
    const collection = db.collection("modules");
    const result = await collection.insertOne(module);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update module
// returns: id of the updated module or null, if module could not be updated
async function updateModule(module) {
  try {
    let id = module._id;
    delete module._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("modules");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: module });

    if (result.matchedCount === 0) {
      console.log("No module with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Module with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}
// delete module by id
// returns: id of the deleted module or null, if modules could not be deleted
async function deleteModule(id) {
  try {
    const collection = db.collection("modules");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No object with id " + id);
    } else {
      console.log("Object with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

//////////////////////////////////////////
// Tasks
//////////////////////////////////////////

// Get all tasks
async function getTasks() {
  let tasks = [];
  try {
    const collection = db.collection("tasks");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    tasks = await collection.find(query).toArray();
    tasks.forEach((albums) => {
      tasks._id = tasks._id.toString(); // convert ObjectId to String
    });
    //console.log(tasks)
  } catch (error) {
    // TODO: errorhandling
  }
  return tasks;
}

async function createTask(task) {
  try {
    const collection = db.collection("tasks");
    const result = await collection.insertOne(task);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

async function updateTask(id, update) {
  try {
    const collection = db.collection("tasks");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: update });
    return result.matchedCount > 0 ? id : null;
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

async function deleteTask(id) {
  try {
    const collection = db.collection("tasks");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);
    return result.deletedCount > 0 ? id : null;
  } catch (error) {
    console.log(error.message);
  }
  return null;
}

// export all functions so that they can be used in other files
export default {
  getModules,
  getModule,
  createModule,
  updateModule,
  deleteModule,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
