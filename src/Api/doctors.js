const URL = "https://hospital-mangement-ac.herokuapp.com/doctors";

const getDoctor = async () => {
  const res = await fetch(URL, {
    method: "GET",
  });
  if (!res.ok) return;
  const data = await res.json();
  return data;
};

const createDoctor = async (type, name, onSuccess) => {
  if (name.length === 0) return;
  const body = { type, name };
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) return;
  onSuccess();
};

const exps = { getDoctor, createDoctor };
export default exps;
