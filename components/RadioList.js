import Styles from "../styles/RadioList.module.css";

function RadioList({ population, setPop, value }) {
  return (
    <form>
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
            name="population"
            id={value}
            value={value}
            checked={population === value}
            onClick={(e) => setPop(e)}
          />
          <span className="form-check-label">{value}</span>
        </div>
      </label>
    </form>
  );
}

export default RadioList;
