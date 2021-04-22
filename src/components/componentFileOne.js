import React, { Component } from 'react';
import { addUser } from '../actions/actionFileOne';
import { connect } from 'react-redux';

//Components import React, action functions relevant to this component and connect
//Components have states, and therefore setState, mapToProps and mapToDispatch(actions)
export class ComponentFileOne extends Component {
    state = {
        user: ''
    }
    handleOnChange = (event) => {
        this.setState({
            user: event.target.value
        })
    }
    handleOnSubmit = (event) => {
       
        event.preventDefault();
        let collectedUserState = {...this.state}
        let returnedUser = this.props.addUser(collectedUserState)
        console.log(returnedUser)
    }
    render(){
        
        return(
            <div>
                <p>{this.props.user}</p>
            <div>           
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <input
                type="text"
                onChange={(event) => this.handleOnChange(event)}
                value={this.state.user}
            />
            <input type="submit" />
        </form></div></div> 

            
        )
    }
}
const mapStateToProps = state => {
    return { user: state.user.user }
  }

//the dispatch action is addUser from actionFileOne
export default connect(mapStateToProps, { addUser })(ComponentFileOne);