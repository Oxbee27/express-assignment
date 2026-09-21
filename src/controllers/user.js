require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("../database/users");
const { object } = require("zod");

const register = async (req, res, next) => {
  try {
  const { name, password, email, role } = req.body;

  if (!name || !password || !email || !role) {
    return res.status(400).json({
      status: "error",
      message: "Name,  password, email and role  are required"
    });
  }

  const existingUser = users.find(
    (user) => user.email.toLowerCase() === email.trim().toLowerCase(),
  );
  if (existingUser) {
    return res.status(409).json({
      status: "error",
      message: "email already exist"
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    password: hashPassword,
    role, 
  }

  users.push(newUser);
const safeUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    };


  console.log(
    `user ${newUser.name} your account has been created successfully`
  );

  res.status(200).json({
    status: "success",
    message: "user registered successfully",
    user: safeUser
  });
  }
catch(error){
next(error)

}
};

const login = async (req, res, next ) => {
  try{
  const { email, password } = req.body;

if(!email || !password){
return res.status(400).json({
"status": "error",
"message": "email and password required"

})

}

  const user = users.find(
    (u) => u.email=== String(email).trim().toLowerCase()      
  );

  if (!user) {
    return res.status(403).json({
      status: "error",
      message: "invalid email or password",
    });
  }
const passwordMatch = await bcrypt.compare(password, user.password)

if(!passwordMatch){
return res.status(401).json({
 status: "error",
 message: "invalid email or password"
})

}
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({
      status: "error",
      message: "JWT secret is not configured",
    });
  }

  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
      name: user.name,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h"
    },
  );

  return res.status(200).json({
    status: "success",
    message: "login successful",
    token,
  });
  } catch (error){
    next(error)

  }
};

module.exports = { register, login };
