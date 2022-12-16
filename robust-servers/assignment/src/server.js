const { PORT = 9999 } = process.env;

const path = require("path");
const app = require(path.resolve(`${process.env.SOLUTION_PATH || ""}`, "src/app"));

app.listen(PORT, () => console.log(`Serving running on Port ${PORT}...`));
