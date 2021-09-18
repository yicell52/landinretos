import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Counter from "./components/Counter";
import ImgTaza from "../src/images/retosT.png";
import Challenges from "./Components/Challenges";
import { challengesData } from "./Components/Challenges/data";
import Footer from "./Components/Footer";

function App() {
    return (
        <div className="App">
            <>
                <Router>
                    <Navbar />
                    <img
                        src={ImgTaza}
                        alt=""
                        style={{
                            height: "45vh",
                            width: "100%",
                        }}
                    />

                    <h2 style={{ textAlign: "center", fontSize: "50px" }}>
                        Retos
                    </h2>
                    <Challenges data={challengesData} />

                    <Switch>
                        <Route exact path="/" />
                    </Switch>
                    <Footer />
                </Router>
            </>
        </div>
    );
}

export default App;
