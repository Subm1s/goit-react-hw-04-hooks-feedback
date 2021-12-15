import { useState } from "react";
import "./App.css";
import FeedbackOptions from "./component/FeedbackOptions";
import Section from "./component/Section";
import Statistic from "./component/Statistic";
import Notification from "./component/Notification";

function App () {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const goodInc = () => {
  setGood(state => state + 1);
};
const neutralInc = () => {
  setNeutral(state => state + 1);
};
const badInc = () => {
  setBad(state => state + 1);
};


  const countTotalFeedback = () => {
    return(
      good + bad + neutral
    )
    
  };

  const countPositiveFeedbackPercentage = () => {
    let positivePercentage = Math.round(
      (good / countTotalFeedback()) * 100);
    return positivePercentage;
  };

    return (
      <main>
        <Section title = "Please leave feedback">
        <FeedbackOptions 
          goodInc = {goodInc}
          badInc = {badInc}
          neutralInc = {neutralInc}
        />
        </Section>
        <Section title = "Statistic">
          {countTotalFeedback() < 1 ? <Notification message="There is no feedback" /> : 
        <Statistic 
        good = {good}
        bad = {bad}
        neutral = {neutral}
        totalFeedback = {countTotalFeedback()}
        positivePercentage = {countPositiveFeedbackPercentage()}
        />
        }
        </Section>

      </main>
    );
  }

export default App;
