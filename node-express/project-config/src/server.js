// destructuring and default arguments. PORT will be whatever is in provess.env or 5000
const { PORT = 5000 } = process.env;
// require app so we can use it here
const app = require("./app");

// This function will run when the server successfully starts
const listener = () => console.log(`Listening on Port ${PORT}!`);
// this is what runs the server. It takes two arguments, a port number and a function.
// PORT variable defines where your server is running. The listener function will
// get called as soon as the server is running
app.listen(PORT, listener);
