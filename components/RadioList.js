import Styles from "../styles/RadioList.module.css";

function RadioList({ population, setPop, value, name }) {
  return (
    <>
      <label
        htmlFor={value}
        className={Styles.RadioList}
        style={
          population === value
            ? { background: "#f3f3ff", border: "2px solid #086eff" }
            : { background: "#fff" }
        }
      >
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name={name}
            id={value}
            value={value}
            onChange={(e) => setPop(e)}
            checked={population === value ? true : false}
          />
          <span className="form-check-label">{value}</span>
        </div>
      </label>
    </>
  );
}

export default RadioList;
