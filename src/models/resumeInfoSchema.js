const mongoose = require("mongoose");

const resumeInfoSchema = mongoose.Schema({
    personalInfo: Object,
    educationalInfo: Array,
    workExperience: Array
}, {
    timestamps: true
});

module.exports = mongoose.model('Users Resumes', resumeInfoSchema);