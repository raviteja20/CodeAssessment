import React from 'react';
import jQuery from 'jquery';
import UserTextBox from './user-text-box';
import Comment from './comment';

export default class UserFeed extends React.Component{
	constructor(){
		super();
		this.state={
			comments: [],
			likes: 0
		};
	}

	componentWillMount(){
		this._fetchComments();
	}

	render(){
		const commentsList = this._getCommentsList();
		return(
			    <div className="row comments-container">
	        		<div className="cell">
						<div className="row comments-container">
							<h3 className="comment-count">{this._getCommentCount(commentsList.length)}</h3>
							
							<div>
								{commentsList}
							</div>				

							<UserTextBox addComment={this._addComment.bind(this)}/>
						</div>
					</div>
				</div>
			);
	}

	_addComment(commentUser, userComment)
	{ 
		let date = new Date();
		const comment={
		  user: commentUser,
	      value: userComment,
	      id: this.state.comments.length+1,
	      timestamp: date.getTime(),
	      timeZoneOffset: date.getTimezoneOffset(),
	      likes: 0
		};

		this.setState({
			comments: this.state.comments.concat([comment])
		});
	}


	_fetchComments(){
		debugger;
		jQuery.ajax({
			method:'GET',
			url:'./data.json',
			success: (comments) => {
				debugger;
				this.setState({comments: comments.feed})
			}
		});
	}

	_getCommentsList(){
		debugger;
		return this.state.comments.map((comment)=> {
			return 	<Comment user={comment.user}
						value={comment.value}
						likes={comment.likes}
						timestamp={comment.timestamp}
						incrementLikes={this._incrementLikes.bind(this)} />				
		});
	}

	_incrementLikes(timestamp){
		const comment = this.state.comments.map( (comment)=>{
				if(comment.timestamp === timestamp)
				{
					comment.likes++;					
				}
				return comment;
			});
		this.setState({
			comments: comment
		});
	}

	_getCommentCount(commentsLength){
		if(commentsLength === 0)
		{
			return 'No Comments to show';
		}else if(commentsLength === 1)
		{
			return '1 Comment';
		}else
		{
			return `${commentsLength} comments`;
		}
	}
}

