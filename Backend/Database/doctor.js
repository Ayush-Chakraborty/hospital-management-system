import knex from "./knex.js";

const getPractitoner = () => {
  return knex("practitioner").select("*");
};

const getSurgeon = () => {
  return knex("surgeon").select("*");
};
const getConsultant = () => {
  return knex("consultant").select("*");
};

const createPractitioner = (doctor) => {
  return knex("practitioner").insert(doctor);
};
const createSurgeon = (doctor) => {
  return knex("surgeon").insert(doctor);
};
const createConsultant = (doctor) => {
  return knex("consultant").insert(doctor);
};

export default {
  getPractitoner,
  getConsultant,
  getSurgeon,
  createPractitioner,
  createConsultant,
  createSurgeon,
};
