import React from "react";

var a = 5,
  b = 0;

export default class myTable extends React.Component {
  createTable = () => {
    let table = [];
    for (let i = 1; i <= 10; i++) {
      table.push(<td>{` 5 X ${i} = ${5 * i} `}</td>);

      table.push(<tr />);
    }
    return table;
  };

  render() {
    return <table>{this.createTable()}</table>;
  }
}
