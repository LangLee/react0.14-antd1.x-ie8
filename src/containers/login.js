import { connect } from 'react-redux';
import Login from '../components/login';
import {doLogin, cancelLogin} from '../actions/Login';

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.login
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doLogin: () => {
      dispatch(doLogin())
    },
    cancelLogin: () => {
      dispatch(cancelLogin())
    }
  }
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer