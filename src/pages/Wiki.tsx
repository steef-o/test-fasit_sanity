import React, { useState, useEffect } from "react";

import sanityClient from "../client";
import WikiItem from "./WikiItem";

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
        {postData && postData.map((post, index) => <WikiItem post={post} key={index} />)}
      </section>
    </main>
  );
};

export default Wiki;
