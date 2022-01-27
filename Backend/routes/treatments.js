import express from "express";
import db from "../Database/treatment.js";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

const strSeparator = "_,_";
const convertArrayToString = (array) => {
  let string = "";
  for (let i = 0; i < array.length; i++) {
    string = string + array[i];
    if (i < array.length - 1) {
      string = string + strSeparator;
    }
  }
  return string;
};

const convertStringToArray = (string) => {
  if (!string) return [];
  return string.split(strSeparator);
};
router.get("/", async (req, res) => {
  const data = await db.getTreatments();
  for (let treatment of data)
    treatment.consultants = convertStringToArray(treatment.consultants);

  res.status(200).json(data);
});

router.post("/", async (req, res) => {
  const treatment = req.body;
  treatment.consultants = convertArrayToString(treatment.consultants);
  const data = { id: uuidv4(), ...treatment };
  await db.createTreatment(data);

  res.status(201).json({ success: true });
});

export default router;
