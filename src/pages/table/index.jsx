import React from "react";
import { getParameters, getTestsForProduct } from "../../utils";
import styles from "../../styles/table.css"

const Table = () => {
  console.log(getTestsForProduct('L1', '1'))
  const nameOfFamily = "L1"
  return (
    <div>
      <table className="rwd-table">
        <tr>
          <th>Id</th>
          {getParameters(nameOfFamily).map((parameter) => {
            return (
              <th className={styles.th} key={parameter.id}>{parameter.name}</th>
            )
          })}
        </tr>
        <tr>
          <td data-th="Movie Title">Star Wars</td>
          <td data-th="Genre">Adventure, Sci-fi</td>
          <td data-th="Year">1977</td>
          <td data-th="Gross">$460,935,665</td>
        </tr>
        <tr>
          <td data-th="Movie Title">Howard The Duck</td>
          <td data-th="Genre">"Comedy"</td>
          <td data-th="Year">1986</td>
          <td data-th="Gross">$16,295,774</td>
        </tr>
        <tr>
          <td data-th="Movie Title">American Graffiti</td>
          <td data-th="Genre">Comedy, Drama</td>
          <td data-th="Year">1973</td>
          <td data-th="Gross">$115,000,000</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;