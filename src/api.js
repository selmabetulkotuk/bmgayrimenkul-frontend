const API_URL = process.env.REACT_APP_BACKEND_URL;


export const sendContactForm = async (formData) => {
  const response = await fetch(`${API_URL}/api/contacts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("İletişim formu gönderilemedi");
  }

  return response.json();
};


export const getProperties = async (type) => {
  const url = type
    ? `${API_URL}/api/properties?type=${type}`
    : `${API_URL}/api/properties`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("İlanlar alınamadı");
  }

  return response.json();
};


export const getPropertyById = async (id) => {
  const response = await fetch(`${API_URL}/api/properties/${id}`);

  if (!response.ok) {
    throw new Error("İlan bulunamadı");
  }

  return response.json();
};
