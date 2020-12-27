import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";

const Wiki = () => {
  const [postData, setPostData] = useState<any>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]
        {
          title,
          slug
        }`
      )
      .then((data: any) => setPostData(data))
      .catch((err: string) => console.log(err));
  }, []);

  return (
    <main>
      <section>
        <h1>Spørsmål & svar</h1>
        {postData &&
          postData.map((post, index) => (
            <Link to={"/wiki/" + post.slug.current} key={index}>
              <h3>{post.title ?? "noData"}</h3>
            </Link>
          ))}
      </section>
    </main>
  );
};

export default Wiki;
