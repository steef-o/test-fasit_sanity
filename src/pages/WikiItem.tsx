import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client";
import { WikiItemTypes } from "../Models/WikiItemTypes";

interface ParamTypes {
  slug: string;
}

const WikiItem = () => {
  const [wikiItemData, setWikiItemData] = useState<WikiItemTypes | null>(null);
  const { slug } = useParams<ParamTypes>();

  const builder = imageUrlBuilder(sanityClient);
  const urlFor = (source) => {
    return builder.image(source);
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "author": author->name,
            "authorImage": author->image
        }`
      )
      .then((data) => setWikiItemData(data[0]))
      .catch((err) => console.log(err));
  }, [slug]);

  if (!wikiItemData) return <div>Loading...</div>;

  return <main>{wikiItemData && <h1>{wikiItemData?.title}</h1>}</main>;
};

export default WikiItem;
