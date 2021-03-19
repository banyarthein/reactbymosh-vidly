import _ from "lodash";
import React, { Component } from "react";

class TableBody extends Component {
  renderCell = (row, column) => {
    if (column.content) return column.content(row);
    return _.get(row, column.path);
  };

  createKey = (row, column) => {
    return row._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((row) => (
          <tr key={row._id}>
            {columns.map((col) => (
              <td key={this.createKey(row, col)}>
                {this.renderCell(row, col)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
