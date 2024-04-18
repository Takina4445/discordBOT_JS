const mongoose = require("mongoose")
const fs=require("fs")

const { MONGODB_HOST, MONGODB_PORT, MONGODB_DBNAME, MONGODB_USER, MONGODB_PAWD } = process.env


if (!MONGODB_HOST) {
    console.log("[MONGODB_HOST] not found in the env parameter")
    process.exit()
} else if (!MONGODB_PORT) {
    console.log("[MONGODB_PORT] not found in the env parameter")
    process.exit()
} else if (!MONGODB_DBNAME) {
    console.log("[MONGODB_DBNAME] not found in the env parameter")
    process.exit()
} else {
    let mongoUrl = `mongodb://`
    // Add user
    if (MONGODB_USER && MONGODB_PAWD) {
        mongoUrl += `${MONGODB_USER}:${encodeURIComponent(MONGODB_PAWD)}@`
    }
    // Add server url
    mongoUrl += `${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DBNAME}`
    console.log(`Connecting to mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DBNAME}`)

    mongoose.connect(mongoUrl).catch((error) => logger.error(error));
    
}
