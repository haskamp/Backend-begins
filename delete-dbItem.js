import {writeFile} from "fs/promises"
import process from "node:process"
// Delete

const deleteUser = (id) => {
    readFile("database.json", "utf8")
        // .then(database => JSON.parse(database))
        .then( (data) => {
            const database = JSON.parse(data)
            const indexOfUser= database.users.findIndex(users.id === id)
            database.users.splice(indexOfUser, 1)
            writeFile("database.json", JSON.stringify(database))
        })
}

const [,, id ] = process.argv()
void deleteUser(id)