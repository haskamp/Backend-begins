import {writeFile, readFile} from "fs/promises";

console.log("Hello World");
writeFile("foo.txt", "bar");



// Write File
writeFile("hello.json", JSON.stringify({x: "5", y:"10"}, null, 4  ));

readFile("hello.json", "utf8")
    .then(data => {
       return JSON.parse(data)
    })
    .then(data => {
        const newData = JSON.stringify({...data, "name": "Rick", "age": "70"})
        return writeFile("./Hello.json", newData)
    })

