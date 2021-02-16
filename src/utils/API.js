import axios from "axios";

export default {
  randomPup: () => {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  dogBreed: (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`);
  },
  allBreeds: () => {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
}