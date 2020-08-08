import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

// Creating Routes component to our SPA
function Routes() {
    return (
        <HashRouter>
            {/* Route to our index page (landing page) */}
            <Route path="/" exact component={Landing} />{" "}
            {/* Route to our "/study" page */}
            <Route path="/study" component={TeacherList} />{" "}
            {/* Route to our "give-classes" page */}
            <Route path="/give-classes" component={TeacherForm} />{" "}
        </HashRouter>
    );
}

export default Routes;
