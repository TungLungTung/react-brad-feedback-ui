import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  //// Calculate ratings avg
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h3>{feedback.length} Reviews</h3>
      <h4>Average rating: {isNaN(average) ? '0' : average}</h4>
    </div>
  );
}
