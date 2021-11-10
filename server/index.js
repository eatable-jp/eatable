require("dotenv").config();
const app = require("./app");

<<<<<<< HEAD
const PORT = process.env.PORT || 9000;
=======
const PORT = process.env.PORT || 8080;
>>>>>>> a3702605dda4af30558c8ece17c6cbab498d88c1

app.listen(PORT, () => {
    console.log(`App Listening on PORT${PORT}!`);
});