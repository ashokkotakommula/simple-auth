const Users = require('../model/Schema');
const bcrypt = require('bcrypt');

const SignUp = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({msg: 'all fields required'})
        }

        const passwordHash = await bcrypt.hash(password, 10);

        try {
            const newUser = new Users({
            email, password: passwordHash
            })
            await newUser.save()
            
        } catch (err) {
            res.status(500).json({msg: err})
        }
        
        res.status(200).json({msg: "successfully created account"})

    } catch (err) {
       res.status(500).json({msg: err.message})
   }
}

const getUsers = async (req, res) => {
    try {

        const users = await Users.find();
        return res.status(200).json(users)

    } catch (err) {
        res.status(500).json({msg: err.message})
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({msg: 'all fields required'})
        }
 
        const user = await Users.findOne({email})
        if(!user) return res.status(400).json({msg: 'User does not exist'})
            
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({msg: 'Incorrect password'})

        return res.status(200).json({msg: "loggedin successfully"})
 
    } catch (err) {
        res.status(500).json(err.message)
    }
 }

module.exports = {SignUp, getUsers, login};