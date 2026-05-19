import "./rolltext.css";

export default function RollText({
  text,
  className = "",
  delay = 0.02,
  duration = 0.5,
}) {
  return (
    <span
      className={`roll ${className}`}
      style={{
        "--delay": `${delay}s`,
        "--duration": `${duration}s`,
      }}
    >
      {text.split("").map((letter, index) => (
        <span
          key={index}
          data-letter={letter === " " ? "\u00A0" : letter}
          style={{ "--i": index }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}
