import axios from "axios";

export default {
  randomPup: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  dogBreed: function(breed) {
    return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },
  allBreeds: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
}