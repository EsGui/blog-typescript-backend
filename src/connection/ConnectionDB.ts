import { MongoClient } from "mongodb";

class ConnectionDB {

    public client = new MongoClient("mongodb://localhost:27017/");

    public connectToDataBase() {
        try {
            const database = this.client.db('blog');
            const users = database.collection('users');
            return users;
        } catch (error) {
            console.error(`ERROR ====>>>> ${error}`);
        }
    }
}

export default ConnectionDB;