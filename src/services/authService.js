import ApiClient from "./apiClient";

let apiClient = ApiClient.createInstance("auth");

export const loginUser = (email, password) => {
  const params = JSON.stringify({
    email: email,
    password: password,
  });

  return apiClient.post(`/login`, params);
};

export const registerUser = (name, surname, email, password) => {
  const params = JSON.stringify({
    firstname: name,
    lastName: surname,
    email: email,
    password: password,
  });

  return apiClient.post(`/register`, params);
};
