import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className='container mx-auto'>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App