import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const values = Object.values(this.state);
    let total = 0;
    for (const iterator of values) {
      total += iterator;
    }
    return total;
  }
  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100) || 0;
  }
  onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        this.setState(prev => ({ good: prev.good + 1 }));
        break;
      case 'neutral':
        this.setState(prev => ({ neutral: prev.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prev => ({ bad: prev.bad + 1 }));
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
          {this.countTotalFeedback() === 0 && <Notification />}
        </Section>
      </>
    );
  }
}
