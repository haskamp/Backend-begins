import {writeFile} from "fs/promises";

console.log("Hello World");

writeFile("foo", "bar");
writeFile("hello.JSON", {x: "5", y:"10"} );