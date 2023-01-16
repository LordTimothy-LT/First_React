import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Button from "../../../reuseable components/Button";

function Midsection() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const baseUrl = "http://jsonplaceholder.typicode.com/posts/1";

  // useEffect(()=>{
  //     axios.get(baseUrl)
  //     .then((reponse) => {
  //         setPost(reponse.data)
  //         console.log("response ==> ", reponse.data);
  //     })
  // },[post])

  const getPostData = useCallback(async () => {
    try {
      await fetch(baseUrl)
        .then((reponse) => {
          if (!reponse.ok) {
            throw new Error("Catch an error");
          }
          return reponse.json();
        })
        .then((res) => {
          setPost(res);
        })
        .catch((err) => {
          setError(err);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {});
}
