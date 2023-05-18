import mongoose from "mongoose";

export const Connection = async (username, password) => {

    // use '%40' instead of '@' if ya password contains '@'
    const URL = `mongodb+srv://${username}:${password}@ecommerce-web.bhmri3f.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database connected successfully");
    } catch(error) {
        console.log('Error while connecting with the database', error.message);
    }
}
 
export default Connection;