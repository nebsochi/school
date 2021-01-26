function BackBtn(props) {
  const { handleBackNav, top, left } = props;
  return (
    <span
      style={{
        position: "absolute",
        top: top || "50px",
        left: left || "3rem",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleBackNav}
    >
      <img src="/chevron-left.svg" alt="back" />
      Back
    </span>
  );
}

export default BackBtn;
