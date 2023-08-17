const mongoose = require('mongoose');
const connection = "mongodb+srv://hollywoodchase:bigNsmall517!@Cluster0/Weather?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));