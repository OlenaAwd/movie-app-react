import React from "react";
import css from "./SingleContent.module.css";
import { img_300, unavailable } from "../../config/config";
import { Badge } from "@mui/material";
import ContentModal from "../ContentModal/ContentModal";

function SingleContent({ id, poster, title, date, media_type, vote_average }) {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className={css.poster}
        alt={title}
        src={poster ? `${img_300}/${poster}` : unavailable}
      />
      <b className={css.title}>{title}</b>
      <span className={css.subTitle}>
        {media_type === "tv" ? "TV Series" : "Movie"}

        <span className={css.subTitle}>{date}</span>
      </span>
    </ContentModal>
  );
}

export default SingleContent;
