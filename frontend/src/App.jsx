import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { UserCard } from "./components/UserCard";
import { userService } from "./services/userService";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		userService.getAll().then((res) => setUsers(res.data.data));
	}, []);

	const handleDelete = (id) => {
		userService
			.remove(id)
			.then(() => setUsers(users.filter((u) => u._id !== id)));
	};

	return (
		<>
			<Navbar count={users.length} />
			<div className="user-grid">
				{users.map((user) => (
					<UserCard key={user._id} user={user} onDelete={handleDelete} />
				))}
			</div>
		</>
	);
}

export default App;
