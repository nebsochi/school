import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "../styles/CheckList.module.css";

export default class CheckList extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    const { value, checked } = this.props.checkValue;
    return (
      <div
        className={`${styles.CheckList} ${
          checked && styles.CheckListActive
        } shadow-sm`}
        onClick={() => this.props.onclick(this.props.checkValue)}
      >
        <small className={checked ? styles.textBlue : "text-muted"}>
          {value}
        </small>
        <span>{checked && <img src="/check.svg" alt="check" />}</span>
      </div>
    );
  }
}
