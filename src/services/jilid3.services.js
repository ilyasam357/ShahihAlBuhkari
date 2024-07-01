import axios from "axios";

export const getJilid3 = (callback) => {
  axios
    .get("https://api.hadith.gading.dev/books/bukhari?range=401-600")
    .then((res) => {
      callback(res.data.data.hadiths);
    })
    .catch((err) => {
      console.log(err);
    }); 
};
