import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Register from "./pages/Register.jsx";
import NewPost from "./pages/NewPost.jsx"; // Import NewPost component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/categories/:category/new-post" element={<NewPost />} /> {/* New route for creating a post */}
      </Routes>
    </Router>
  );
}

export default App;