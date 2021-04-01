import axios from 'axios'

// const gitApiUrl = 'https://api.tvmaze.com/search/shows?q=snow';
const gitApiUrl = 'https://api.github.com/users';

export const getAllReposByUser = (user) => {
  return new Promise((resolve, reject) => {
    try {
      if (user){
        const fetchUrl = `${gitApiUrl}/${user}/repos`;
        axios.get(fetchUrl)
        .then((res) => {
          console.log("getAllReposByUser > axios res=", res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log("getAllReposByUser > axios err=", err);
          reject("Error in getAllReposByUser axios!");
        });
      } else { resolve([]); }
    } catch (error) {
      console.error("in services > getAllReposByUser, Err===", error);
      reject('System error. Please try again later!');
    }
  });
};

export const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
      .get(gitApiUrl)
      .then((res) => {
        console.log("getAllUsers > axios res=", res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log("getAllUsers > axios err=", err);
        reject("Error in getAllUsers axios!");
      });
    } catch (error) {
      console.error("in services > updateLastCwkId, Err===", error);
      reject('System error. Please try again later!');
    }
  });
};

export const getAllUsers2 = async (url = "", id = "") => {
  try {          
    // const res = await axios.get(`${url}/${id}`);          
    const res = await axios.get(gitApiUrl);
    console.log("getAllUsers2 > axios res=", res.data);
    return res.data;
    // const data = await res.data;
    // console.log("getAllUsers2 > axios res=", data);
    // return data;
  } catch(e) {          
    console.log(e);
  }
};
