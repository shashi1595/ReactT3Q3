import React, { Component } from "react";
import "./styles.css";
var a = 0,
  b = 5;
var i = 0;
class App extends Component {
  render() {
    return (
      <div>
        <h1 className="emp">Multiplication Table of 5</h1>
        <table className="table">
          <tr>
            <td>{b}</td>
            <td>X</td>
            <td>{++a}</td>
            <td>=</td>
            <td>{a * b}</td>
          </tr>
          <tr>
            <td>{b}</td>
            <td>X</td>
            <td>{++a}</td>
            <td>=</td>
            <td>{a * b}</td>
          </tr>
          <tr>
            <td>{b}</td>
            <td>X</td>
            <td>{++a}</td>
            <td>=</td>
            <td>{a * b}</td>
          </tr>
          <tr>
            <td>{b}</td>
            <td>X</td>
            <td>{++a}</td>
            <td>=</td>
            <td>{a * b}</td>
          </tr>
          <tr>
            <td>{b}</td>
            <td>X</td>
            <td>{++a}</td>
            <td>=</td>
            <td>{a * b}</td>
          </tr>
          <tr>
            <td>{b}</td>
            <td>X</td>
            <td>{++a}</td>
            <td>=</td>
            <td>{a * b}</td>
          </tr>
          <tr>
            <td>{b}</td>
            <td>X</td>
            <td>{++a}</td>
            <td>=</td>
            <td>{a * b}</td>
          </tr>
          <tr>
            <td>{b}</td>
            <td>X</td>
            <td>{++a}</td>
            <td>=</td>
            <td>{a * b}</td>
          </tr>
          <tr>
            <td>{b}</td>
            <td>X</td>
            <td>{++a}</td>
            <td>=</td>
            <td>{a * b}</td>
          </tr>
          <tr>
            <td>{b}</td>
            <td>X</td>
            <td>{++a}</td>
            <td>=</td>
            <td>{a * b}</td>
          </tr>
        </table>
      </div>
    );
  }
}
export default App;
