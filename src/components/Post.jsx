import { Navigate, useNavigate, Routes, Route } from 'react-router-dom';

const Post = () => {
  const status = 200;

  const navigate = useNavigate();

  const handleClick = () => {
    console.log('You clicked me');
    /// navigate to another link
    navigate('/about');
  };

  if (status === 404) {
    return <Navigate to="/notfound"></Navigate>;
  }

  return (
    <div>
      Hello <br />
      <button onClick={handleClick}>Click me</button>
      <Routes>
        <Route path="/show" element={<h1>Hello world</h1>} />
      </Routes>
    </div>
  );
};

export default Post;
