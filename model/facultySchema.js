// create a schema

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// FACULTY EDUCATION SCHEMA

const educationSchema = new mongoose.Schema({

    //YOP = Year of Passing
    classXpercentage: {
        type: Number,
        required: false
    },
    classXYOP: {
        type: Number,
        required: false
    },
    classXschool: {
        type: String,
        required: false
    },
    classXIIpercentage: {
        type: Number,
        required: false
    },
    classXIIYOP: {
        type: Number,
        required: false
    },
    classXIIschool: {
        type: String,
        required: false
    },
    bachlorsPercentage: {
        type: Number,
        required: false
    },
    bachlorsYOP: {
        type: Number,
        required: false
    },
    bachlorsUniversity: {
        type: String,
        required: false
    },
    mastersPercentage: {
        type: Number,
        required: false
    },
    mastersYOP: {
        type: Number,
        required: false
    },
    mastersUniversity: {
        type: String,
        required: false
    },
    phdPercentage: {
        type: Number,
        required: false
    },
    phdYOP: {
        type: Number,
        required: false
    },
    phdUniversity: {
        type: String,
        required: false
    },
    postDocPercentage: {
        type: Number,
        required: false
    },
    postDocYOP: {
        type: Number,
        required: false
    },
    postDocUniversity: {
        type: String,
        required: false
    },
    otherPercentage: {
        type: Number,
        required: false
    },
    otherYOP: {
        type: Number,
        required: false
    },
    otherUniversity: {
        type: String,
        required: false
    }
})

// RESEARCH PUBLICATION SCHEMA
// JOURNALS SCHEMA
const journalsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    nameOfJournal: {
        type: String,
        required: false
    },
    authors: {
        type: String,
        required: false
    },
    volumeNo: {
        type: String,
        required: false
    },
    issueNo: {
        type: String,
        required: false
    },
    pageNos: {
        type: String,
        required: false
    },
    yearOfPublication: {
        type: Number,
        required: false
    },
    ISSN: {
        type: Number,
        required: false
    },
    DOI: {
        type: Number,
        required: false
    }
})

// CONFERENCES SCHEMA
const conferencesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    nameOfAuthor: {
        type: String,
        required: false
    },
    nameOfConference: {
        type: String,
        required: false
    },
    dateOfConference: {
        type: Date,
        required: false
    },
    placeOfConference: {
        type: String,
        required: false
    },
    nameofProceedings: {
        type: String,
        required: false
    },
    pageNos: {
        type: String,
        required: false
    },
    yearOfPublication: {
        type: Number,
        required: false
    }
})

// BOOKS/CHAPTERS SCHEMA
const booksChaptersSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    nameOfAuthor: {
        type: String,
        required: false
    },
    nameOfBook: {
        type: String,
        required: false
    },
    edition: {
        type: String,
        required: false
    },
    editors: {
        type: String,
        required: false
    },
    pageNos: {
        type: String,
        required: false
    },
    yearOfPublication: {
        type: Number,
        required: false
    }
})


// RESEARCH PUBLICATION SCHEMA 
const researchPublicationSchema = new mongoose.Schema({
    journals: [journalsSchema],
    conferences: [conferencesSchema],
    booksChapters: [booksChaptersSchema]
})

// INTELLECTUAL PROPERTY SCHEMA
// PATENTS SCHEMA
const patentsSchema = new mongoose.Schema({
    inventors: {
        type: String,
        required: false
    },
    titleOfPatent: {
        type: String,
        required: false
    },
    patentNo: {
        type: String,
        required: false
    },
    year: {
        type: Number,
        required: false
    }
})

// DESIGNREGISTRATIONS SCHEMA
const designRegistrationsSchema = new mongoose.Schema({
    inventors: {
        type: String,
        required: false
    },
    titleOfDesign: {
        type: String,
        required: false
    },
    designNo: {
        type: String,
        required: false
    },
    year: {
        type: Number,
        required: false
    }
})

// ANY OTHER IP SCHEMA
const anyOtherIPSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    inventors: {
        type: String,
        required: false
    },
    year: {
        type: Number,
        required: false
    }
})

// INTELLECTUAL PROPERTY SCHEMA
const intellectualPropertySchema = new mongoose.Schema({
    patents: [patentsSchema],
    designRegistrations: [designRegistrationsSchema],
    anyOtherIP: [anyOtherIPSchema]
})

// AWARDS AND HONOURS SCHEMA
const awardsAndHonoursSchema = new mongoose.Schema({
    nameOfAward: {
        type: String,
        required: false
    },
    year: {
        type: Number,
        required: false
    }
})
// MEMBERSHIP OF PROFESSIONAL BODIES SCHEMA
const membershipOfProfessionalBodiesSchema = new mongoose.Schema({
    nameOfBody: {
        type: String,
        required: false
    },
    registrationNo: {
        type: String,
        required: false
    },
    designation: {
        type: String,
        required: false
    }
})


// THE MAIN FACULTY SCHEMA
const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        default: "Faculty"
    },
    roomNo: {
        type: Number,
        default: 0
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    education: [educationSchema],

    researchPublication: [researchPublicationSchema],

    intellectualProperty: [intellectualPropertySchema],

    awardsAndHonours: [awardsAndHonoursSchema],

    membershipOfProfessionalBodies: [membershipOfProfessionalBodiesSchema],

    areaOfSpecialization: {
        type: String,
        default: "Electronics and communications",
        required: true
    },
    coursesTaught: {
        type: String,
        default: "BEE",
        required: true
    },
    additonalInformation: {
        type: String,
        default: "None",
        required: false
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

//Hashing the password
facultySchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
}
);

facultySchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

const Faculty = new mongoose.model('Faculty', facultySchema);
module.exports = Faculty;