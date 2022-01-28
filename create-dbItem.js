import { v4 as uuid } from "uuid";
import { writeFile, readFile } from "fs/promises";
import process from "node:process"


// Create

const createUser = (userName) => {
    readFile("database.json", "utf8")
        .catch((err) => console.log(err))
        .then((database) => {
            return JSON.parse(database);
        })
        .then((data) => {
            data.users.push({ id: uuid(), user: userName });
            writeFile("database.json", JSON.stringify(data));
        })
};

const [,, userName ] = process.argv()
void createUser(userName)