import ApiClient from "./apiClient";

let apiClient = ApiClient.createInstance(
  "ratings",
  JSON.parse(localStorage.getItem("session"))?.token
);

export const addRating = (rating, mediaId) => {
  const params = {
    value: rating,
    mediaId,
  };

  return apiClient.post(`/add`, params);
};
