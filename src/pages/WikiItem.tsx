import React from "react";
import { Link } from "react-router-dom";

interface IWikiItem {
  post: any;
}

const WikiItem = ({ post }: IWikiItem) => {
  return (
    <Link to={"/wiki/" + post.slug.current}>
      <h3>{post.title ?? "noData"}</h3>
    </Link>
  );
};

export default WikiItem;
