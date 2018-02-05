import React, {Component} from 'react';
import { Router, Route, hashHistory, IndexRedirect} from 'react-router'
import Login from '../containers/login'
import TableDemo from '../components/tableDemo'
import FormDemo from '../components/formDemo'
import Page_404 from '../components/404'
import Home from '../containers/home'

const validate = function(){
//
};
class Routes extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/login"  component={Login} />
                <Route path="/" onEnter={validate}>
                    <IndexRedirect to="tableDemo" />
                    <Route component={Home}>
                        <Route path="tableDemo" component={TableDemo}/>
                        <Route path="formDemo" component={FormDemo}/>
                    </Route>
                </Route>

                <Route path="*" component={Page_404}/>
            </Router>
        )
    }
}
export default Routes