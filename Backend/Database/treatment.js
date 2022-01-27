import knex from "./knex.js";

const getTreatments = () => {
  return knex("treatment").select("*");
};

const createTreatment = (treatment) => {
  return knex("treatment").insert(treatment);
};

const getConsultants = () => {
  return knex("treatment_consultant")
    .join("consultant", "consultant.id", "treatment_consultant.consultant_id")
    .select("treatment_consultant.treatment_id", "consultant.name");
};

export default { getTreatments, createTreatment, getConsultants };
