import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github() {
    const data=useLoaderData();  
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/surajtoraskar")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((res) => {
  //         setData(res);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="Git Picture"
        width={300}
        className="text-center"
      />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/surajtoraskar");
  return response.json(); 
};
