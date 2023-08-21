// import PropTypes from 'prop-types';
import statistics from './data.json'
// const randomColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()
function Statistic(label, percentage) {
   return(
    <div>
       <p>{label}</p>
       <h4>{percentage}</h4>
     </div>)
}
export default function StatisticList() {
    return (
        <div>
        {statistics.map(statistic => 
            <Statistic 
                key={statistic.id}
                label={statistic.label} 
                percentage={statistic.percentage}
            />
        )}
        </div>
    )
}