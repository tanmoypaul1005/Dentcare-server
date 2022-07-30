const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt');
const AuthSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'admin',
    },
    contactNumber:{
        type: Number,
        required: true,
    }

}, { timestamps: true });

AuthSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

module.exports=mongoose.model('Auth', AuthSchema);