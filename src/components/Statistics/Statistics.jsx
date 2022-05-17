
import { List, Name } from './Statistics.styles'
import PropTypes from 'prop-types';


const Statistics = ({good,neutral,bad,countTotal,positiveFeedback }) => {
    return <>
 <List>
          <li>
            {<Name>Good: {good}</Name>}

          </li>
          <li>
            <Name>Neutral: {neutral}</Name>
          
          </li>
          <li>
            {<Name>Bad: {bad}</Name>}
     
        </li>
        <li>
            <Name>Positive feedback:{positiveFeedback } % </Name>

        </li>
        <li>
            <Name>Total feedback: {countTotal} </Name>
        </li>
    </List>
    </>
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotal: PropTypes.number.isRequired,
  positiveFeedback:PropTypes.number.isRequired,
  
};

export default Statistics;