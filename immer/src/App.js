import React, { Component } from 'react';
import produce from 'immer';
import './styles.css';
class App extends Component {
	id = 2;
	state = {
		input: '',
		todos: [
			{
				id: 1,
				text: '제목1',
				done: false
			},
			{
				id: 2,
				text: '제목2',
				done: true
			}
		]
	};
	handleChange = e => {
		this.setState({
			input: e.target.value
		});
	};
	//	handleInsert = () => {
	//		this.setState({
	//			todos: this.state.todos.concat({
	//				id: ++this.id,
	//				text: this.state.input
	//			}),
	//			input: ''
	//		});
	//	};
	handleInsert = () => {
		this.setState(
			produce(draft => {
				draft.todos.push({
					id: ++this.id,
					text: this.state.input,
					done: false
				});
				draft.input = '';
			})
		);
	};
	// immer
	handleToggle = id => {
		this.setState(
			produce(draft => {
				const todo = draft.todos.find(todo => todo.id === id);
				todo.done = !todo.done;
			})
		);
	};
	//	handleRemove = id => {
	//		this.setState({
	//			todos: this.state.todos.filter(todo => todo.id !== id)
	//		});
	//	};
	handleRemove = id => {
		this.setState(
			produce(draft => {
				const index = draft.todos.findIndex(todo => todo.id === id);
				draft.todos.splice(index, 1);
			})
		);
	};
	render() {
		return (
			<div>
				<div>
					<input value={this.state.input} onChange={this.handleChange} />
					<button onClick={this.handleInsert}>추가</button>
				</div>
				<ul>
					{this.state.todos.map(todo => (
						<li
							key={todo.id}
							style={{
								textDecoration: todo.done ? 'line-through' : 'none'
							}}
							onClick={() => this.handleToggle(todo.id)}
							onContextMenu={e => {
								e.preventDefault();
								this.handleRemove(todo.id);
							}}
						>
							{todo.text}
						</li>
					))}
				</ul>
			</div>
		);
	}
}
export default App;