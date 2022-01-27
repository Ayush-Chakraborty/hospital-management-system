const URL = "http://localhost:5000/treatments";

const createTreatment = async (treatment, onSuccess) => {
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

export default { getTreatments, createTreatment };
