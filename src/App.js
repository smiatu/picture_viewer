import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import PictureList from "./containers/PictureList";
import PictureComponent from "./containers/PictureComponent";


function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<PictureList/>}/>
                <Route exact path="/picture/:pictureId" element={<PictureComponent/>}/>
                <Route>404 Not Found</Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
