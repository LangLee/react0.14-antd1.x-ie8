require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('core-js');
require('es6-promise');
require('fetch-ie8');
require('whatwg-fetch');

const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const store = require('./store/configureStore');
const Routes = require('./router');

require('antd/dist/antd.less');

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>, document.getElementById('root'));
