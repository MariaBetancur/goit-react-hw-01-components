import PropTypes from 'prop-types';
import React from 'react';
import './Statistics.css';

export default function Statistics({ title, stats }) {
  // Declara la constante colors aquí dentro
  const colors = ['#51a8d1', '#b56fee', '#d34ca6', '#51a8d1'];

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map((item, index) => (
          <li
            className="stat-item"
            key={item.id}
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
