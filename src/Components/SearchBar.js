import React, { Component } from "react";
import "../styles/SearchBar.css";

export default class searchBar extends Component {
  state = { term: "" };
  update = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.getSearch(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>
              <i
                className="fa fa-youtube-play fonts"
                style={{ color: "red" }}
              ></i>
              <b style={{ padding: " 10px" }}>you tube</b>
            </label>
            <input type="text" value={this.state.term} onChange={this.update} />
          </div>
        </form>
      </div>
    );
  }
}
