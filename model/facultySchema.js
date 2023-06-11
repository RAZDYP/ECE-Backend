// create a schema

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
})

// we are hasing th password
facultySchema.pre('save', async function (next) {

    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
}
);

const Faculty = new mongoose.model('Faculty', facultySchema);
module.exports = Faculty;