import React, { Component } from 'react';
class App extends Component {
	state = {
		username: '',
		password: '',
		list: []
	};
	id = 1;
	usernameInput = React.createRef();
	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		const { username, password } = this.state;
		this.setState({
			list: this.state.list.concat({
				username,
				password,
				id: this.id
			}),
			username: '',
			password: ''
		});
		this.id++;
		this.usernameInput.current.focus();
  };
  
  handleRemove = (id) => {

    // const index = this.state.list.findIndex(item=> item.id === id);
    // const newList = this.state.list.slice();
    // newList.splice(index, 1);
    // this.setState({
    //   list:newList
    // });

    const {list} = this.state;
    this.setState({
      list: list.filter(item => item.id !== id)
    });
  }

	render() {
		const { username, password } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input name="username" value={username} onChange={this.handleChange} ref={this.usernameInput} />
					<input name="password" value={password} onChange={this.handleChange} />
					<button type="submit">insert</button>
				</form>
				<ul>
					{this.state.list.map(item => {
						return (
							<li key={item.id}>
								{item.username} - {item.password} <button onClick={() => this.handleRemove(item.id)}>remove</button>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
export default App;