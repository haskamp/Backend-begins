import {readFile} from "fs/promises"

// Read

const readUser = () => {
    readFile("database.json", "utf8")
        .then(database => JSON.parse(database))
        .then( () => {
            console.log(database)
        })
}

const readIdByUser = () => {
    readFile("database.json", "utf8")
        .then(database => JSON.parse(database))
        .then( () => {
            console.log(database)
        })
}


void readIdByUser()
