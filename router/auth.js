const express = require('express');
const router = express.Router();

require('../db/conn');
const Faculty = require('../model/facultySchema');

router.get('/', (req, res) => {
    res.send('Hello World! how are you , i am the router?');
}
);

// REGISTER ROUTE
router.post('/register', async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }
    try {
        const facultyExist = await Faculty.findOne({ email: email })
        if (facultyExist) {
            return res.status(422).json({ error: "Email already exists" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password does not match" });
        }
        else {
            const faculty = new Faculty({ name, email, phone, password, cpassword });
            // A Pre save method is defined in facultySchema.js to hash the password
            // it is called before saving the data in the database
            const facultyRegister = await faculty.save()
            console.log(facultyRegister)
            if (facultyRegister) {
                res.status(201).json({ message: "Faculty registered successfully" });
            } else {
                res.status(500).json({ error: "Failed to register" });
            }
            console.log(facultyRegister);
        }
    } catch (err) {
        console.log(err);
    }

});

// LOGIN ROUTE
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the data" });
        }
        const facultyLogin = await Faculty.findOne({ email: email });
        console.log(facultyLogin);
        if (!facultyLogin) {
            res.status(400).json({ message: "USER ERROR" })
        }
        else {
            res.json({ message: "USER LOGIN SUCCESS" })
        }
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = router;