import axios from "axios";

export const getJilid1 = (callback) => {
  axios
    .get("https://api.hadith.gading.dev/books/bukhari?range=1-200")
    .then((res) => {
      callback(res.data.data.hadiths);
    })
    .catch((err) => {
      console.log(err);
    }); 
};
