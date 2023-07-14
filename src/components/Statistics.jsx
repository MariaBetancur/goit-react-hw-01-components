import PropTypes from 'prop-types';
// import { section, statList, statItem } from '.Statistics.styled';
export default function Statistics({ title, stats }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(item => (
          <li key={item.id}>
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
