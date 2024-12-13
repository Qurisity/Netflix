import jwt from "jsonwebtoken"
import { ENVS } from "../config/envs.js"

export const generateToken = (userID, res) => {
    const token = jwt.sign({ userID }, ENVS.JWT_SECRET, { expiresIn: "1h" })
    
    res.cookie("jwt-netflix", token, {
        maxAge: 3600000, // 1 hour in milisecs
        httpsOnly: true,
        sameSite: "strict", // захищає від атак
        secure: ENVS.NODE_ENV !=="development"
    })
    return token;
}