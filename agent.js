require("dotenv").config()
let agent
let target
agent = process.env.AGENT_CODENAME
target = process.env.MISSION_TARGET
console.log(`Welcome back, ${agent}. Your next target is ${target}.`)