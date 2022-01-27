import knex from "./knex.js";

const getTreatments = () => {
  return knex("treatment").select("*");
};

const createTreatment = (treatment) => {
  return knex("treatment").insert(treatment);
};

const updateTreatment = (id, treatment) => {
  return knex("treatment").where("id", id).update(treatment);
};

export default { getTreatments, createTreatment, updateTreatment };
