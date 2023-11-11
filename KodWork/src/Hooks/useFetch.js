import {useEffect, useState} from 'react';

import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, [url]);

  const getData = async () => {
    try {
      const {data: responseData} = await axios.get(url, {
        headers: {
          'X-Api-Key':
            'cccb6a380fd8c81c888263e455ae1572ce2e9bb9788bda45743c2ea5df9fb205',
        },
      });
      setData([...data, ...responseData.results]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return {data, loading, error};
};

export default useFetch;


