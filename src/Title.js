import React from 'react';
import './Title.css'
export default class Title extends React.Component {


	render() {
		return <h1 className="my-title">{this.props.content}</h1>
	}

}