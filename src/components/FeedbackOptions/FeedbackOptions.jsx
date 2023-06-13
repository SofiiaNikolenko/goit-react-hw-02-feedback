import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({onGoodFeedback, onNeutralFeedback, onBadFeedback}) => {
    return (
        <div>
            <button onClick={ onGoodFeedback }>Good</button>
            <button onClick={ onNeutralFeedback }>Neutral</button>
            <button onClick={ onBadFeedback }>Bad</button>
        </div>
    )
}

FeedbackOptions.propTypes = {
    onGoodFeedback: PropTypes.func.isRequired,
    onNeutralFeedback: PropTypes.func.isRequired,
    onBadFeedback: PropTypes.func.isRequired,
}