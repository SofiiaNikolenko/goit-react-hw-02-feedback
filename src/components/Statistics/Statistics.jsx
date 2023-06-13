import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { Notificatio } from '../Notificatio/Notificatio'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return total ? (
        <div>
            <p>Good: { good }</p>
            <p>Neutral: { neutral }</p>
            <p>Bad: { bad }</p>
            
            <p>Total: { total } </p>
            <p>Positive feedback: { positivePercentage } %</p>
        </div>
    ) : (
        <Notificatio message="There is no feedback"/>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}