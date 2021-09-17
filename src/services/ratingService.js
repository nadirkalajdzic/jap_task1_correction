import ApiClient from "./apiClient";

let apiClient = ApiClient.createInstance(
  "rating",
  JSON.parse(localStorage.getItem("session"))?.token
);

export const addRating = (rating, videoId) => {
  const params = {
    value: rating,
    VideoId: videoId,
  };

  return apiClient.post(`/add`, params);
};
