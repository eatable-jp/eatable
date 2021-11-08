require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    console.log(`App Listening on PORT${PORT}!`);
});