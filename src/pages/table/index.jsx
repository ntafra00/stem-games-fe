import React from "react";
import { getParameters, getTestsForProduct, getTests } from "../../utils";
import styles from "../../styles/table.css"

const Table = () => {
  const nameOfFamily = "L1"
  return (
    <div>
      <table className="rwd-table">
        <tr className="title-container">
          <th className="title">Filtered test vectors for XXXX</th>
        </tr>
        <tr>
          <th>Id</th>
          {getParameters(nameOfFamily).map((parameter) => {
            return (
              <>
              <th className={styles.th} key={parameter.id}>{parameter.name}</th>
              </>
            )
          })}
        </tr>
        <tr>
          <td>Star Wars</td>
          <td>Adventure, Sci-fi</td>
          <td>1977</td>
          <td>$460,935,665</td>
          <td><img src="src\assets\close.png" className="x-img"></img></td>
        </tr>
        
      </table>
    </div>
  );
};

export default Table;