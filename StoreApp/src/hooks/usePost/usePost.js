import {useState} from 'react';
import axios from 'axios';

const usePost = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (url, apiData) => {
    /*  try {
      setLoading(true);
      const {data: responseData} = await axios.post(url, apiData);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      console.log("Error", err)
      setError(err);
      setLoading(false);
    } */
    try {
      fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        body:JSON.stringify({
            username: "mor_2314",
            password: "83r5^_"
        })
    })
        .then(res=>res.json())
        .then(json=>console.log(json))
    } catch (err) {
      console.log(err);
    }
  };

  return {data, loading, error, post};
};

export default usePost;
