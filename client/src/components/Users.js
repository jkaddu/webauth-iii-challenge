import React from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

class Users extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/api/users', {
				'Content-Type': 'application/json',
				headers: { authorization: localStorage.getItem('token') }
			})
			.then((response) => {
				console.log(response);
				this.setState({
					users: response.data
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		const { users } = this.state;
		return (
			<div>
				<h1>Students</h1>
				{users.map((user) => {
					return (
						<div>
							<h3 key={user.id}>{user.username}</h3>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Users;
