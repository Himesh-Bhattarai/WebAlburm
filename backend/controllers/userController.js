const user = require('../models/user');

//Register new User
const registerUser = async (req, res)=>{
    //Ask for their Email, name , Password for Register
    const{name, email, password} = req.body;
    try {
        const userExist = await user.findOne({email});//check user already exist?
        if(userExist){
            return res.status(400).json({massage: "User already Exist."});//if user exist send this massage
        }

        //if user is not register we have to register 
        const addSalt = await bcrypt.hash(password, 10);// i add some salt or some ramdom char to secure user passwors

        //now create new user
        const newUser = new user({ name, email, password: addSalt });

        //save user into database
        await newUser.save();
        req.status(201).json({massage:"user register successfuly"});  
    } catch (error) {
        res.status(500).json({massage: "Internal Server Error"});
    }

    //Login User
    const loginUser = async (req, res) =>{
        const{ email, password} = req.body;

    try {
        const newUser = await user.findOne({email})
        if(!newUser){
            return res.status(400).json({massage : "User Not Found, Please enter your Valid Email"});
        }

        const ifMatch = await bcrypt.compare(password, user.password);
        if(!ifMatch){
            return res.status(400).json({massage : "Invalid credential"});
        }

        const tokenJWT = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
        
    } catch (error) {
         res.status(500).json({ message: 'Server error' });
    }
        
    }

} 

module.exports = { loginUser , registerUser};
