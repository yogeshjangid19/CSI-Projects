import "./App.css";
import Form from "./Form";
import UserPanel from "./UserPanel"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/userpanel" element={<UserPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
