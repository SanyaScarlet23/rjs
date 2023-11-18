const mongoose = require("mongoose");
//* npm install validator - biblioteka za validacija
const validator = reqiure("validator");
//* npm install bcrypt - biblioteka za kriptiranje
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        lowercase: true, //site bukvi da se mail
        unique: true, //sekoj email da e unikaten
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minlength: [4, "Paswword must be a least 4 characters"],
        // validate: [validator.isStrongPassword, "Please provide a strong password"],
    },
    admin: {
        type: Boolean,
        default: false,
    },
});

userSchema.pre("save", async function (next) {
    //! Ako ne e promentet passwprd-ot
    if (!this.isModified("password")) {
        //! SLEDNO- ovde7tuka zapira funkcijata i ne se izvrshuva toa shto e nadolu
        return next();
        //? AKO E PROMENET PASSWORD-OT ILI IMAME NEKAKOV PASSWORD
    } else {
        //? Togash se koristi else-ot ili se hashira passwordot so jachina 12
        this.password = await bcrypt.hash(this.password, 12);
        next();
    }
});

const User = mongoose.model("User", userSchema);
 module.exports = User;