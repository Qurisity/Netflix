import express from "express";
import cookieParser from "cookie-parser";



import authRoute from "./routes/authRoute.js"
import movieRoutes from "./routes/movieRoutes.js"
import tvRoutes from "./routes/tvRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";


import { ENVS } from "./config/envs.js";
import { connectDB } from "./config/db.js";
import { secureRoutes } from "./middleware/secureRoute.js";




const app = express()

const PORT = ENVS.PORT;

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRoute)
app.use("/api/v1/movie",secureRoutes, movieRoutes)
app.use("/api/v1/tv", secureRoutes, tvRoutes);
app.use("/api/v1/search",secureRoutes, searchRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`);
    connectDB();
})