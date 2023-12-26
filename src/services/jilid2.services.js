import axios from "axios";

export const getJilid2 = (callback) => {
  axios
    .get("https://api.hadith.gading.dev/books/bukhari?range=201-400")
    .then((res) => {
      callback(res.data.data.hadiths);
    })
    .catch((err) => {
      console.log(err);
    }); 
};
