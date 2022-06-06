import React from 'react';
import ReactDOM from 'react-dom';
import "./fontawesome";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Home";
import dashboard from "./dashboard";
import createPosts from "./createPosts";
import EditPosts from "./EditPosts";
import Navbar from "./navbar";
import "../../css/app.css";

function App() {
    return (
        <Router>
        <>
        <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" exact component={dashboard} />
                <Route path="/addPosts" exact component={createPosts} />
                <Route path="/edit/:id" exact component={EditPosts} />
            </Switch>
        </>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
