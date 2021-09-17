import ApiClient from "./apiClient";

let apiClient = ApiClient.createInstance(
  "ratings",
  JSON.parse(localStorage.getItem("session"))?.token
);

export const addRating = (rating, videoId) => {
  const params = {
    value: rating,
    VideoId: videoId,
  };

  return apiClient.post(`/add`, params);
};
