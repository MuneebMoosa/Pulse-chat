import { Routes, Route } from "react-router-dom";
import ChatArea from "./components/ChatArea";
import Home from "./pages/Home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatArea />} />
    </Routes>
  )
}

export default App