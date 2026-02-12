import { useState } from "react";
import Star from "./Star";
import { useAppContext } from "../../utils/ContextProvider";

export default function Stars() {
  const [tempRating, setTempRating] = useState<number>(0);
  const { rating } = useAppContext();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {Array.from({ length: 10 }, (_, index) => (
        <Star
          key={index}
          index={index}
          tempRating={tempRating}
          setTempRating={setTempRating}
        />
      ))}
      <span
        style={{
          marginLeft: "10px",
          verticalAlign: "5px",
          color: "white",
        }}
      >
        {tempRating || rating}
      </span>
    </div>
  );
}
