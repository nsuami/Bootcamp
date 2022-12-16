const { PORT = 1545 } = process.env;
const app = require("./app");

const listener = () => console.log(`Server is running on Port ${PORT}!`);
app.listen(PORT, listener);
