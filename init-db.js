import { writeFile, readFile } from "fs/promises";

// C R U D

const databaseTemplate = JSON.stringify({  users: [] });
writeFile("database.json", databaseTemplate);






