const URL = "https://hospital-mangement-ac.herokuapp.com/treatments";

const createTreatment = async (treatment, onSuccess) => {
  console.log(treatment);
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(treatment),
  });
  if (!res.ok) return;
  onSuccess();
};

const getTreatments = async () => {
  const res = await fetch(URL, {
    method: "GET",
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data;
};

const updateTreatment = async (treatment, onSuccess) => {
  console.log(treatment);
  const res = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(treatment),
  });
  if (res.ok) onSuccess();
};

const exps = { getTreatments, createTreatment, updateTreatment };
export default exps;
