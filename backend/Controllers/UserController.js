const User = require('../Models/User');
const bcrypt = require('bcrypt');
const { generateToken } = require('../middleware/verifyToken');
const cloudinary = require('cloudinary').v2;
 const fs = require('fs');

  cloudinary.config({ 
        cloud_name:  process.env.cloud_name, 
        api_key:  process.env.api_key, 
        api_secret:    process.env.api_secret
    });

// REGISTER
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        const token = generateToken(newUser);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            },
            token
        });

    } catch (error) {
        console.error("Register Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// LOGIN
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }

        const token = generateToken(user);

        res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

// LOGOUT
exports.logout = async (req, res) => {
    try {
        // Pure JWT is stateless. Logout is done on client by removing token.
        res.status(200).json({
            success: true,
            message: "Logout successful. Please remove the token from client."
        });
    } catch (error) {
        console.error("Logout Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

var imagesArray = [];
exports.userAvatar = async (req, res) => {

    try {

        imagesArray = [];
        const userId= req.userId;
        const image = req.file;

         const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: true,
            
            }

        for (let i = 0; i < req?.files?.length; i++) {
            
            const img = await cloudinary.uploader.upload(req.files[i].path, options, function(err, result) {
                imagesArray.push(result.secure_url);
                fs.unlinkSync(`uploads/${req.files[i].filename}`);
                console.log(req.files[i].filename);
            });
        }



    
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
        
    }

}