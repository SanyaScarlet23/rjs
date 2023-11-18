//* npm install mongoose
const mongoose = require("mongoose");
//* npm install dotenv
const dotenv = require("dotenv");
dotenv.config({ path: `${_dirname}/../config/config.env` });

const DB = process.env.DATABASE.replace(
    `<PASSWORD>`,
    process.env.DATABASE_PASSWORD
);

exports.init = async () => {
    try{
        await mongoose.connect(DB, 
            //{ Zastareno e ova zatoa go brisheme!!!
            //useNewUrlParser: true,
            //useUnifiedTopology: true,
        //}
        );
        console.log("Successfully connected to database");
    } catch (err){
        console.log(err);
    }
};