import httpClient from "../api/axios";

const shorten = (url) => {
  return httpClient.post(`shortener`, { longUrl: url });
};

export { shorten };
