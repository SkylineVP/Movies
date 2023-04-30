import React, { memo, useMemo } from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
const stars = [1, 2, 3, 4, 5];
const Rating = ({ rating }) => {
  const roundRating = useMemo(() => {
    return Math.round(rating / 2);
  }, [rating]);

  return (
    <div style={{ width: "fit-content" }}>
      {stars.map(star =>
        star <= roundRating ? (
          <StarRateRoundedIcon
            key={star}
            style={{ fontSize: "40px", color: "yellow" }}
          />
        ) : (
          <StarBorderRoundedIcon key={star} style={{ fontSize: "40px" }} />
        ),
      )}
    </div>
  );
};

export default memo(Rating);
