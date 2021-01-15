import { useState } from "react";
import Styles from "../styles/RadioList.module.css";

function RadioList({ population, setPop, value }) {
  return (
    <form>
      <div className={Styles.RadioList}>
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
          <label className="form-check-label" htmlFor={value}>
            {value}
          </label>
        </div>
      </div>
    </form>
  );
}

export default RadioList;
