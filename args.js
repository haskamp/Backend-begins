// expected {"foo", "bar", "baz"}
// command: node args.js foo bar baz

console.log(process.argv.slice(2));

const [ , , ...args] = process.argv;
console.log(args)


