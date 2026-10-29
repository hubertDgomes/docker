import userSchema from "../model/userSchema.js"

const userController = async (req , res) => {
    const {fullname , email } = req.body
    if(!fullname || !email){
        return res.status(400).json({message : "All field are required."})
    }

    try{
        const user = await userSchema.findOne({email})
        if(user){
            return res.status(500).json({message : "The user already existed!"})
        }
        const newUser = new userSchema({
            fullname,
            email
        })
        await newUser.save()
        res.status(201).json({
        message: "User created successfully",
      });   
    }
    catch(err){
        console.log(err)
    }

}

const getUser = async (req , res ) => {
    const getUser = await userSchema.find()
    return res.status(200).json(getUser)  
}

export default {userController , getUser}