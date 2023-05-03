import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Result from "./pages/results/result";
import { AppProvider } from "./context/appContext";
import { useState } from "react";

function App() {
  const [shortUrl, setShortUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <AppProvider value={{ isLoading, setIsLoading, shortUrl, setShortUrl }}>
        <Router>
          <Routes>
            <Route element={<Landing />} index />
            <Route element={<Result />} path="/result" />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
