import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.clarifai.com",
  headers: {
    Authorization: "Key caf8ed3ee7a24d619c0aa96b316ace56s",
  },
});