
export const isAuthenticated = async (req,res,next) => {
     try {
        const token = re.cookie['access-token'];
        if (!token) {
            res.status(500).json({ message: "you are not Logged in " });
        }
        const decodedData = jwt.verify(token, process.env.JWT_SECERET);
         req.user = decodedData._id;
         next();
    } catch (error) {
        res.status(500).json({ message: "Error in checking " });
        
    }
}

export const isAdmin = async (req,res,next) => {
     try {
        const token = res.cookie['admin-token'];
        if (!token) {
            res.status(500).json({ message: "Only admin can access this route" });
        }
        const seceretKey = jwt.verify(token, process.env.ADMIN_SECERET_KEYS);
        const adminSeceretKey = process.env.ADMIN_SECERET_KEYS|| "Shrey";
         const isMatch = seceretKey === adminSeceretKey;
         if (!isMatch) {
            return res.status(400).json({ message: "Invalid admin key" });
        }
         next();
    } catch (error) {
        res.status(500).json({ message: "Error in checking " });
        
    }
}