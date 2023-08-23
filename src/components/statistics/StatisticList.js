import PropTypes from 'prop-types';
import { Stat, Title, StatList, Item } from './statistics.styled';
function getRandomColorRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
export default function StatisticList({ statistics, title }) {
  console.log(statistics)
  return (
    <Stat>
      {title && <Title>Upload stats</Title>}

      <StatList>
        {statistics.map(statistic => {
          return (
            <Item
              key={statistic.id}
              style={{ backgroundColor: getRandomColorRGB() }}
            >
              <span>{statistic.label}</span>
              <span>{statistic.percentage}%</span>
            </Item>
          );
        })}
      </StatList>
    </Stat>
  );
}
StatisticList.propType = {
  statistics: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
  title: PropTypes.string.isRequired,
};
