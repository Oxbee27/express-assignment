
const admin = (req, res) => {
return res.status(200).json({
"status" : "success",
"message" : "welcome, Admin"


})

}

const user = (req, res) => {
return res.status(200).json({
"status" : "success",
"message" : "welcome, user"


})

}

module.exports = {admin, user}