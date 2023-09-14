const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

async function connect(){

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/kde_education_dev');
        console.log('Connet successfully!!');
    } catch (error) {
        console.log('Connet failure!!');
    }

}

module.exports = { connect };