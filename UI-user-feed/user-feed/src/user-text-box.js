import React from 'react';

export default class UserTextBox extends React.Component{
	render(){
		return(
				<form className="text-box" onSubmit ={this._onSubmit.bind(this)}>
					<div className="text-box-fields">
						<input placeholder="User Name:" ref={user => this._user = user} />
						<textarea placeholder="Comment" ref={comment => this._value = comment} ></textarea>
					</div>
					<div className="text-box-actions">
						<button type="submit">
							Post Comment
						</button>
					</div>
				</form>
			);
	}

	_onSubmit(event){
		event.preventDefault();
		if(this._user.value && this._value.value)
		{
			event.preventDefault();
			this.props.addComment(this._user.value, this._value.value);

			this._user.value='';
			this._value.value='';
		}
	}
}
