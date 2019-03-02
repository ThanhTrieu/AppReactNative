import { connect } from 'react-redux';
// component nhan dispacth action to golbal props
import CounterComponent from '../Components';

//Actions
import { incerementNumber } from '../Actions';
import { decerementNumber } from '../Actions';

const mapStateToProps = (state) => {
    //console.log(`state after changed : ${JSON.stringify(state.counterReducers)}`);
    return {
        times: state.counterReducers ? state.counterReducers : 0
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: (step) => {
            dispatch(decerementNumber(step));
        },
        onIncrement: (step) => {
            dispatch(incerementNumber(step));
        }
    };
}
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
export default CounterContainer;
// Container se la noi de ban cac su kien sang component.