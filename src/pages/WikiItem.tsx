import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client";

interface IWikiItem {
  post: any;
}
interface ParamTypes {
  slug: string;
}

const WikiItem = ({ post }: IWikiItem) => {
  const [wikiItemData, setWikiItemData] = useState(null);
  const { slug } = useParams<ParamTypes>();

  const builder = imageUrlBuilder(sanityClient);
  const urlFor = (source) => {
    return builder.image(source);
  };

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_slug.current == "${slug}"]{
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
      "authorName": author->name,
      "authorImage": author->image
    }`
      )
      .then((data) => setWikiItemData(data[0]))
      .catch((err) => console.log(err));
  }, [slug]);

  return (
    <>
      {!wikiItemData ? (
        <div>Loading..</div>
      ) : (
        <main>
          <article>
            <header>
              <div>
                <div>
                  <h1></h1>
                  <div>
                    {/*<img*/}
                    {/*  src={urlFor(wikiItemData.authorImage).url()}*/}
                    {/*  alt={wikiItemData?.authorName}*/}
                    {/*/>*/}
                  </div>
                </div>
              </div>
            </header>
          </article>
        </main>
      )}
    </>
  );
};

export default WikiItem;
