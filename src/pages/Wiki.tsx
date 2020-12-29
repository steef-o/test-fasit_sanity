import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import CharacterReadingSVG from "../assets/img/CharacterReadingSVG";
import { WikiTypes } from "../Models/WikiTypes";

const Wiki = () => {
  const [postData, setPostData] = useState<WikiTypes[]>([]);

  console.log(postData);

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

  if (postData.length === 0) return <div>Loading...</div>;

  return (
    <main className="w-full sm:flex justify-center m-2 sm:m-0">
      <section className="w-full sm:w-5/12">
        <div className="">
          <h1 className=" text-3xl sm:text-4xl font-bold">Spørsmål & svar</h1>
          <hr className="w-auto sm:w-80" />
        </div>
        <ul className="mt-8">
          {postData &&
            postData.map((post) => (
              <Link
                to={"/wiki/" + post.slug.current}
                key={post.slug.current}
                className="hover:text-magenta hover:underline"
              >
                <li className="">{post?.title}</li>
              </Link>
            ))}
        </ul>
      </section>
      <section className="w-full sm:w-5/12 max-w-xs">
        <CharacterReadingSVG fill={"#ff00ff"} className="mx-8 sm:mx-0" width="100%" />
      </section>
    </main>
  );
};

export default Wiki;
