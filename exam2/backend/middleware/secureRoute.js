import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ENVS } from "../config/envs.js";

export const secureRoutes = async (req, res, next) => {
	try {
        const token = req.cookies["jwt-netflix"];
        
		if (!token) {
			return res.status(401).json({ success: false, message: "Unauthorized - No Token Provided" });
		}

		const decoded = jwt.verify(token, ENVS.JWT_SECRET);
		if (!decoded) {
			return res.status(401).json({ success: false, message: "Unauthorized - Invalid Token" });
		}

		const user = await User.findById(decoded.userID).select("-password");

		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}

		req.user = user;

		next();
	} catch (error) {
		console.log("Error in protectRoute middleware: ", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};