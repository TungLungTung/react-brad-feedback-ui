// import { v4 as uuidv4 } from 'uuid';

import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  /// Fetch feedback from API
  const fetchFeedback = async () => {
    const response = await fetch(`/feedbacks?_sort=id&_order=desc`);
    const data = await response.json();
    // console.log(data);
    setFeedback(data);
    setIsLoading(false);
  };

  /// Delete Feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete this comment ?')) {
      await fetch(`/feedbacks/${id}`, { method: 'DELETE' });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedbacks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    });

    const data = await response.json();

    /// Add to state - DONOT NEED WHWEN USING API
    // newFeedback.id = uuidv4();
    // console.log(newFeedback);
    setFeedback([data, ...feedback]);
  };

  /// Set item to updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    });
  };

  /// Update feedback items
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedbacks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updItem)
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
