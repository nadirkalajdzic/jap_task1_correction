import ApiClient from "./apiClient";

let apiClient = ApiClient.createInstance("medias");

export const getMedias = (mediaType, pageNumber, pageSize) => {
  return apiClient.get(
    `?MediaType=${mediaType}&Pagination.PageNumber=${
      pageNumber == null ? 1 : pageNumber
    }&Pagination.PageSize=${pageSize == null ? 10 : pageSize}`
  );
};

export const getMedia = (id) => {
  return apiClient.get(`/${id}`);
};

export const getFilteredMedia = (filter) => {
  return apiClient.get(`/filter?search=${filter == null ? "" : filter}`);
};
