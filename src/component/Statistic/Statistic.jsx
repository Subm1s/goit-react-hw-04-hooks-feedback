import React from 'react';
import PropTypes from 'prop-types';

const Statistic = ({good, bad, neutral, totalFeedback, positivePercentage}) => {
    console.log(good)
    return (
        <div>
            <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {totalFeedback}</li>
          <li>Positive percentage: {positivePercentage}%</li>
        </ul>
        </div>
    );
};

Statistic.propTypes ={
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
    totalFeedback: PropTypes.number,
    positivePercentage: PropTypes.number,
}

export default Statistic;