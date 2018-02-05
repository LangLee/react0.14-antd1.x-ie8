import { connect } from 'react-redux';
import Home from '../components/home';

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.home
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    //
    }
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default HomeContainer