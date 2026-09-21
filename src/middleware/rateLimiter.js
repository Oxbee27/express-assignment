const rateLimiter = require("express-rate-limit");

const authLimiter = rateLimiter({
windowMs: 15*10*1000,
max:6,
message:{
status: "error",
message: " too many attempts, please try again later"

},

standardHeaders: true,
legacyHeaders:false


})

module.exports={authLimiter}