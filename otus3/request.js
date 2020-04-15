const yargs = require("yargs");
const http = require("http")

function syncGet(url, cb) {
    return new Promise((res, rej) => {
        http.get(url, () => {
            cb();
            res();
        });
    });
}

async function consistent_gets(url, number, counter) {
    for (let i = 0; i < number; i++) {
        await syncGet(url, (resp) => {
            console.log(counter + " requests had been started when request #" + i + " was finished.");
        })
        counter++;
    }
}

const options = yargs
    .usage("Usage: -n <number> -p")
    .option("n", { alias: "number", describe: "Number of requests", type: "string", demandOption: true })
    .option("p", { alias: "parallel", describe: "Turned off by default", type: "boolean" })
    .argv;

counter = 0;
if (options.parallel) {
    //parallel
    for (let i = 0; i < options.n; i++) {
        http.get("http://localhost:8001", (resp) => {
            console.log(counter + " requests had been started when request #" + i + " was finished.");
        })
        counter++;
    }
} else {
    //consistent
    consistent_gets("http://localhost:8001", options.n, counter + 1);
}