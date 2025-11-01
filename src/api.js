const API_URL = process.env.REACT_APP_BACKEND_URL;

export const sendContactForm = async (formData) => {
  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return response.json();
};

export const getProperties = async (type) => {
  const response = await fetch(`${API_URL}/properties?type=${type}`);
  return response.json();
};

export const getPropertyById = async (id) => {
  const response = await fetch(`${API_URL}/properties/${id}`);
  return response.json();
};
