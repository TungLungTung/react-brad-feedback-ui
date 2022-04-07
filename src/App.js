import { v4 as uuidv4 } from 'uuid';

/// React router v5
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink
} from 'react-router-dom';

import Card from './components/shared/Card';

import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import Post from './components/Post';

import AboutIconLink from './components/AboutIconLink';

import AboutPage from './pages/AboutPage';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this comment ?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    /// Add to state
    newFeedback.id = uuidv4();
    // console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/*" element={<Post />} />
        </Routes>

        {/* <Card>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </Card> */}

        <AboutIconLink />
      </div>
    </Router>
  );
};

export default App;
