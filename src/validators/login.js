

const validateLogin = (req, res, next) =>  {

    const { email, password} = req.body;

    const allowedFields = ["email", "password"]
    
    
        const extraFields = Object.keys(req.body).filter(field => !allowedFields.includes(field)
      )
    
    if(extraFields.length > 0){
    return res.status(400).json({
    status: "error",
    message: "only email and  password is required"
    
    })
    
    
    }
    

    if(!email){

        return res.status(400).json({
               
                message:"required Email"

        })
    }

if(!password){

        return res.status(400).json({
               
                message:"required password"
        })
    }

next()
}

module.exports = {validateLogin}