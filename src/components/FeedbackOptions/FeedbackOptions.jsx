import { Button, List } from './FeddbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handOnClick = name => {
    onLeaveFeedback(name);
  };
  return (
    <List>
      {options.map(option => {
        return (
          <li key={option}>
            <Button onClick={() => handOnClick(option)}>{option}</Button>
          </li>
        );
      })}
    </List>
  );
};
