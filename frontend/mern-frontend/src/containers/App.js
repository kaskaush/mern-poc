import {
    connect
} from 'react-redux';
import * as appActions from '../actions/appActions';
import Home from '../components/Home';

const mapStateToProps = (state) => {
    return {
        mappedAppState: state.appState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        mappedToggleAppTodo: () => dispatch(appActions.toggleAddTodo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);