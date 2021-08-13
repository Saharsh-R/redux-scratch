import connect from "../../appStore/connect"

let  Counter =  ({val, inc, dec})=> {
    return (
        <div>
            <p>{val}</p>
            <button onClick = {inc}>Increase</button>
            <button onClick = {dec}>Decrease</button>
        </div>
    )
}

Counter =  connect(
    state => ({val: state.counter}),
    dispatch => ({
        inc : () => dispatch({type: 'INC'}),
        dec : () => dispatch({type: 'DEC'})
    })
)(Counter)

export default Counter