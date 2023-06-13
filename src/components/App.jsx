import React from 'react';
import { Statistics } from './Statistics/Statistics';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import { Section } from './Section/Section'

class App extends React.Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addGoodFeedback = () => {
    this.setState(prevState => ({
        good: prevState.good + 1,
    }));
  }

  addNeutralFeedback = () => {
    this.setState(prevState => ({
        neutral: prevState.neutral + 1,
    }));
  }

  addBadFeedback = () => {
    this.setState(prevState => ({
        bad: prevState.bad + 1,
    }));
  }

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Number((good * 100) / total).toFixed(0) : 0;
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
              onGoodFeedback={this.addGoodFeedback}
              onNeutralFeedback={this.addNeutralFeedback}
              onBadFeedback={ this.addBadFeedback }
          />
        </Section>
        
        <Section title="Statistics">
          <Statistics
            good={ this.state.good }
            neutral={ this.state.neutral }
            bad={ this.state.bad }
            total={ this.countTotalFeedback() }
            positivePercentage={ this.countPositiveFeedbackPercentage() }
          />
        </Section>
      </>
    );
  }
}

export default App;