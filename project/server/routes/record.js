import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

import input from "../inputs/input_validation.js"

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

router.post("/users", async (req, res) => {
  try {
    
    // Define the user object with the provided data
    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      groups: req.body.groups
        // Initialize groups as an empty array
    };
    
    let collection = await db.collection("allUsers");
    // Insert the user object into the "users" collection
    let result = await collection.insertOne(newUser);
    
    // Respond with the inserted user object
    res.status(201).json({ message: "User added successfully", user: newUser });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/username/:username", async (req, res) => {
  let collection = db.collection("allUsers");
  let query = { username: req.params.username};
  let result = await collection.findOne(query);
  console.log(result);
  if (!result) {
    res.status(404).send("Not found"); // Send a bad request status if username not found
  } else {
    res.send(result).status(200);
  }
});

// Route to check if an email is already registered
router.get("/email/:email", async (req, res) => {
  let collection = db.collection("allUsers");
  let query = { email: req.params.email};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

export default router;