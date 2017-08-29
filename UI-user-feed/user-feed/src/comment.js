import React from 'react';

export default class Comment extends React.Component{

	render(){
		return(
				<div className="comment">
					<p className="comment-user">{this.props.user}</p>
					<p className="user-comment">{this.props.value}</p>
					<div className="like-button">
						<button onClick={this._handleClick.bind(this)}>Likes:{this.props.likes}</button>
					</div>
				</div>
			);
	}

	_handleClick(event){
		event.preventDefault();
		this.props.incrementLikes(this.props.timestamp);
	}
}
