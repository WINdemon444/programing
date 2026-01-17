require("dotenv").config()
const secret=process.env.SECRET_PASSWORD
console.log(secret)
const silksong=process.env.SILKSONG_PASSWORD
console.log(`hacker may have a secret password ${secret} and ${silksong}`)