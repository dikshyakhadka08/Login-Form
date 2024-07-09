import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginform from "./components/Loginform";
import Nextpage from "./components/Nextpage";
import Test from "./components/Test";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/nextpage" element={<Nextpage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
  );
}

export default App;
