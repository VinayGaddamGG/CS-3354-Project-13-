import db from "../db/connection.js";


const signIn = async (username, password) => {
    try {
        let collection = db.collection("allUsers");
        const user = await collection.findOne({ username, password });
        
        if (user) {
            // User signed in successfully
            return { success: true, message: "Sign in successful" };
        } else {
            // No credential match
            return { success: false, message: "Incorrect username or password" };
        }
    } catch (error) {
        console.error("Error during sign-in:", error);
        return { success: false, message: "Internal server error" };
    }
};

export default signIn;