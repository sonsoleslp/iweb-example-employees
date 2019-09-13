import React from 'react';
import './User.css';

export default class User extends React.Component {

	render(){
		return <div className="user">
			<div className="name">{this.props.name} </div>
			<img src={this.props.avatar} />
		</div>
	}
}