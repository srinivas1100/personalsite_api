const mongoose = require('mongoose');


const ProjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    },
    img: {
        type: String,
    },
    projecttype: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model("Project", ProjectSchema);