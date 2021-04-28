// importing mongoose
const mongoose = require("mongoose"); // database URIs

// connecting to database
mongoose
    .connect(process.env.LOCAL_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("database connection was successful...")
    })
    .catch((err) => {
        console.log(err.message)
    })

// on connection and disconnection operations
mongoose.connection.on("connected", () => {
    console.log("database connected!")
})

mongoose.connection.on("error", (err) => {
    console.log(err.message)
})

mongoose.connection.on("disconnected", () => {
    console.log("database disconnected!")
})

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    process.exit(0)
})