import React, { Component } from 'react';
import { addUser } from '../actions/actionFileOne';
import { connect } from 'react-redux';

//Components import React, action functions relevant to this component and connect
//Components have states, and therefore setState, mapToProps and mapToDispatch(actions)
export class ComponentFileOne extends Component {
    state = {
        userName: ''
    }
    handleOnChange = (event) => {
        //this is refering to a local state
        this.setState({
            userName: event.target.value
        })
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        //saving the state (input) in a variable
        let collectedUserState = this.state
        //using props, acessing action addUser with collectedUserState as an argument
        this.props.addUser(collectedUserState)
        //console.log(returnedUser)
        //this is a local state and we want input field to be empty upon form submission
        this.setState({
            userName: ''
        });
    }
    render(){
        
        return(
            <div>    
            <div>           
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <input
            
                type="text"
                onChange={(event) => this.handleOnChange(event)}
                value={this.state.user}
            />
            <input type="submit" />
        </form></div><p>{this.props.user}</p></div> 

            
        )
    }
}
//what mapStateToProps is doing is:
//giving a component an informaion requested from redux(store)
const mapStateToProps = state => {
    return { user: state.user}
  }

//the dispatch action is addUser from actionFileOne
export default connect(mapStateToProps, { addUser })(ComponentFileOne);