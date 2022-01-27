import express from "express";
import bodyParser from "body-parser";
import doctorRoutes from "./routes/doctors.js";
import treatmentRoutes from "./routes/treatments.js";
import cors from "cors";
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Server running...");
});

app.use("/doctors", doctorRoutes);
app.use("/treatments", treatmentRoutes);

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
