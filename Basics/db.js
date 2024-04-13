// db.js
const mongoose = require("mongoose");
const dotEnv= require("dotenv");

dotEnv.config();

const db = () => {
    try{    const database = mongoose.connect(process.env.MONGO_URL)
    database.then(() => console.log("\n\t MongoDB is connected 🍏 "))
}
catch{((err) => console.error("Fail to connect", err));
}
}

module.exports = db;
