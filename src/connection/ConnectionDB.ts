import { MongoClient } from "mongodb";

class ConnectionDB {
    public client: any = new MongoClient("mongodb://localhost:27017/");

    public async run() {
        try {
            const database = this.client.db('blog');
            const users = database.collection('users')
            // console.log(await users.find({}));
            return users
        } catch (error) {
            console.error(error)
        } finally {
            await this.client.close();
        }
    }
}

export default ConnectionDB;