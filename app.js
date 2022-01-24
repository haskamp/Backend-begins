import {writeFile} from "fs/promises";

console.log("Hello World");

writeFile("foo.txt", "bar");
writeFile("hello.json", JSON.stringify({x: "5", y:"10"}, null, 4 ));