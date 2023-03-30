import React from "react";
import PropTypes from "prop-types";

export default function StepsTable({ walking, onDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Дата (дд.мм.гг)</th>
          <th>Пройдено (км.)</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {walking.map((o) => (
          <tr key={o.id}>
            <td>{new Date(o.date).toLocaleDateString()}</td>
            <td>{o.distance}</td>
            <td>
              <button className="btn delete-btn" onClick={() => onDelete(o.id)}>
                &#10007;
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

StepsTable.propTypes = {
  walking: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      date: PropTypes.string,
      distance: PropTypes.number,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
