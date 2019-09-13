import React from 'react';

export default class Form extends React.Component  {
	constructor(props) {
		super(props);
		this.state = {
			name:""
		}
		this.addNewUser = this.addNewUser.bind(this)
	}
	render(){
		return <div>
		<label>Add a new employee</label> <br/>
		<input value={this.state.name} onChange={this.onChange} />
		<button onClick={this.addNewUser} >Add</button>
		</div>
	}

	addNewUser(e) {
		this.props.addNewUser(this.state.name)
		this.setState({name:""})
	}

	onChange = (e) => {
		this.setState({name: e.target.value});
	}
}