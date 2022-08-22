import {useState,useEffect} from "react";


export const useFetchPost = (url, dataInput) => {

  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);   
  
  useEffect(() => {
    const getData = async (url) => {
      try {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dataInput})
        };

        let res = await fetch(url,requestOptions);

        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        let data = await res.json();

        setIsPending(false);
        setError({ err: false });

      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    };

    getData(url);
  }, [url]);
  
  return {isPending, error };
};
