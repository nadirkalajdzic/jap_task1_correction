import axios from "axios";

export const getMedias = (mediaType, pageNumber, pageSize) => {
  return axios.get(
    `${
      process.env.REACT_APP_API_URL
    }/medias?MediaType=${mediaType}&PageNumber=${
      pageNumber == null ? 1 : pageNumber
    }&PageSize=${pageSize == null ? 10 : pageSize}`
  );
};

export const getMedia = (id) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/medias/${id}`);
};

export const getFilteredMedia = (filter) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/medias/filter?search=${
      filter == null ? "" : filter
    }`
  );
};
