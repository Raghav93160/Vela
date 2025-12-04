const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'default_secret';
const expiresIn = '1h'; // Token validity

// Middleware to verify JWT in Authorization header
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization; // Expect "Bearer <token>"

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "No token provided" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded; // Attach decoded payload
        next();
    } catch (err) {
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};

// Generate JWT token
const generateToken = (user) => {
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email
    };
    return jwt.sign(payload, secret, { expiresIn });
};

module.exports = {
    verifyToken,
    generateToken
};
