import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import { Component } from "react";

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Main />
                <Footer />
            </>
        );
    }
}

export default App;
