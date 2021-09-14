import axios from "axios";

export const getTopMovies = (pageNumber, pageSize) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/videos/top_movies?PageNumber=${
      pageNumber == null ? 1 : pageNumber
    }&PageSize=${pageSize == null ? 10 : pageSize}`
  );
};

export const getTopShows = (pageNumber, pageSize) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/videos/top_shows?PageNumber=${
      pageNumber == null ? 1 : pageNumber
    }&PageSize=${pageSize == null ? 10 : pageSize}`
  );
};

export const getVideo = (id) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/videos/item/${id}`);
};

export const getFilteredShows = (filter) => {
  return axios.get(
    `${process.env.REACT_APP_API_URL}/videos?search=${
      filter == null ? "" : filter
    }`
  );
};
