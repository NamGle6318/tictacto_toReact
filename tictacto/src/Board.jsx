import React from "react";
import Square from "./Square";

const Board = () => {
  return (
    <div>
      <table className="board">
        <tr>
          <td>
            <Square />
          </td>
          <td>
            <Square />
          </td>
          <td>
            <Square />
          </td>
        </tr>
        <tr>
          <td>
            <Square />
          </td>
          <td>
            <Square />
          </td>
          <td>
            <Square />
          </td>
        </tr>
        <tr>
          <td>
            <Square />
          </td>
          <td>
            <Square />
          </td>
          <td>
            <Square />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Board;
