const mongoose = require('mongoose');

async function connect(){

    try {
        await mongoose.connect('mongodb://localhost:27017/kde_education_dev');
        console.log('Connet successfully!!');
    } catch (error) {
        console.log('Connet failure!!');
    }

}

module.exports = { connect };