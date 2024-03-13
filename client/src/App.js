import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect
  Navigate,
} from "react-router-dom";

import { v4 as uuidV4} from 'uuid';

const Home = () => {
  // Perform navigation logic here, if needed
  return <Navigate to={`/document/${uuidV4()}`} />;
};

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/document/:id" element={<TextEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
