import fs from "fs";
import Papa from "papaparse";

const records = Papa.parse(
  fs.readFileSync("data/session_20240205_211242_v3.csv").toString(),
);

console.log(records);
