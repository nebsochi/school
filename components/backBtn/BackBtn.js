function BackBtn(props) {
  const { handleBackNav } = props;
  return (
    <span
      style={{
        position: "absolute",
        top: "50px",
        left: "3rem",
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
