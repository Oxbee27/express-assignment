const errorHandler = (err, req,res,next) => {
console.error(err.stack)


return res.status(500).json({
staus: "error",
message: "internal sever error"

});

}

module.exports = errorHandler