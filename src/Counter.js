import { connect } from "react-redux"

const Counter=(props)=>{
    return(
        <div>
            <h1>counter App</h1>
            <p>Count is :{props.count}</p>
        </div>
    )

}
//used To read state value
const mapStateToProps=(state)=>{
    return{
        count:state.CounterReducer
    }
}
//connect react app with redux
export default connect(mapStateToProps)(Counter)