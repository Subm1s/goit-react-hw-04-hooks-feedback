import React from "react";
// import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({getFeedBackOnClick, goodInc, badInc, neutralInc}) => {
  return (
    <div className={s.feedbackOptions}>
      <button name='good' className={s.incButton} type="button" onClick={goodInc}>
        Good
      </button>

      <button name='neutral' className={s.incButton} type="button" onClick={neutralInc}>
        Neutral
      </button>

      <button name='bad' className={s.incButton} type="button" onClick={badInc}>
        Bad
      </button>
    </div>
  );
};

// FeedbackOptions.propTypes = {
//     getFeedBackOnClick: PropTypes.func.isRequired,
// }

export default FeedbackOptions;
