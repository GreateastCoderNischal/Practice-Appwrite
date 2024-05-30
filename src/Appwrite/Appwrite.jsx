import { Client, Account, Databases } from "appwrite";
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('661f895d2741989554b1');

const account = new Account(client)
const database = new Databases(client)

export { account, database }
