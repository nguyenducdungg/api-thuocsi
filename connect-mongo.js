const mongoose = require('mongoose')

const DB_name = 'JVB'

const connectionString = `mongodb+srv://nguyenducdung:nguyenducdung@cluster0.ogjrd.mongodb.net/${DB_name}`

mongoose.connect(
    connectionString,
    {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.error('Can not to mongodb!');
            console.error(err);
        } else {
            console.log('Connected to MongoDB!');

        }
    }
)