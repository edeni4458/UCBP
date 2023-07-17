const mongoose = require('mongoose')

const database = "ucbpwebdatabase"

mongoose.set("strictQuery", false);
mongoose.connect(`mongodb://127.0.0.1/${database}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to Outer Haven db: ${database}`))
    .catch(error => console.log('There is a problem with Outer Haven db', error))