import express from "express";
import db from "../Database/doctor.js";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

router.get("/", async (req, res) => {
  const practitinoer = await db.getPractitoner();
  const surgeon = await db.getSurgeon();
  const consultant = await db.getConsultant();
  res.status(200).json({
    practitinoer,
    surgeon,
    consultant,
  });
});

router.post("/", async (req, res) => {
  const doctor = req.body;
  const data = { id: uuidv4(), name: doctor.name };
  if (doctor.type === 1) await db.createPractitioner(data);
  else if (doctor.type === 2) await db.createSurgeon(data);
  else if (doctor.type === 3) await db.createConsultant(data);

  res.status(201).json({ success: true });
});

export default router;
