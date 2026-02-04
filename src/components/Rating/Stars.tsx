import Star from "./Star";

export default function Stars() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {Array.from({ length: 10 }, () => (
        <Star />
      ))}
      <span
        style={{
          marginLeft: "10px",
          verticalAlign: "5px",
          color: "white",
        }}
      >
        10 / 10
      </span>
    </div>
  );
}
