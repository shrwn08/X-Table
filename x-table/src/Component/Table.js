import React, { useState, useEffect } from "react";
import { tableData } from "./Data";

const Table = () => {
  const [sortedData, setSortedData] = useState(tableData);

  const handleSortByDate = () => {
    const sortedByDate = [...tableData].sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      return aDate - bDate;
    });
    setSortedData(sortedByDate);
  };

  const handleSortByViews = () => {
    const sortedByViews = [...tableData].sort((a, b) => {
      return a.views - b.views;
    });
    setSortedData(sortedByViews);
  };

  useEffect(() => {
    console.log(sortedData);
  }, [sortedData]);

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleSortByDate}>Sort by Date</button>
      <button onClick={handleSortByViews}>Sort by View</button>
      <table>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        {sortedData.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.views}</td>
            <td>{item.article}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;