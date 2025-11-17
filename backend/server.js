import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

// CONNECT DATABASE
connectDB();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running ✔");
});

// CONTACT FORM API
app.use("/api/contact", contactRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
