import PropTypes from 'prop-types';

import { ButtonName } from './FeedbackOptions.styles'
const FeedbackOptions = ({options,onLeaveFeedback}) => {
   return (
    <ul>
      {options.map((option) => (
        <ButtonName
          type="button"
        key={option}
           onClick={() => onLeaveFeedback(option)}
        
        >
          {option}
        </ButtonName>
      ))}
    </ul>
  );

}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;