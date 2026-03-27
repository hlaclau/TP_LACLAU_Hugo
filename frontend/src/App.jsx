import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { UserForm } from "./components/UserForm";
import { UserList } from "./components/UserList";
import { userService } from "./services/userService";

function App() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedUser, setSelectedUser] = useState(null);
	const [filterRole, setFilterRole] = useState("all");

	const filteredUsers =
		filterRole === "all" ? users : users.filter((u) => u.role === filterRole);

	useEffect(() => {
		userService
			.getAll()
			.then((res) => setUsers(res.data.data))
			.catch(() => setError("Erreur lors du chargement des utilisateurs."))
			.finally(() => setLoading(false));
	}, []);

	const handleSubmit = (data) => {
		if (selectedUser) {
			return userService.update(selectedUser._id, data).then((res) => {
				setUsers(
					users.map((u) => (u._id === selectedUser._id ? res.data.data : u)),
				);
				setSelectedUser(null);
			});
		}
		return userService
			.create(data)
			.then((res) => setUsers([...users, res.data.data]));
	};

	const handleDelete = (id) => {
		return userService
			.remove(id)
			.then(() => setUsers(users.filter((u) => u._id !== id)));
	};

	return (
		<>
			<Navbar count={filteredUsers.length} />
			<div className="user-form-wrapper">
				<UserForm
					onSubmit={handleSubmit}
					selectedUser={selectedUser}
					onCancel={() => setSelectedUser(null)}
				/>
			</div>
			<div className="filter-bar">
				{["all", "user", "admin"].map((role) => (
					<button
						key={role}
						type="button"
						className={`filter-btn${filterRole === role ? " active" : ""}`}
						onClick={() => setFilterRole(role)}
					>
						{role === "all"
							? "Tous"
							: role.charAt(0).toUpperCase() + role.slice(1)}
					</button>
				))}
			</div>
			<UserList
				users={filteredUsers}
				loading={loading}
				error={error}
				onDelete={handleDelete}
				onEdit={setSelectedUser}
				filterRole={filterRole}
			/>
		</>
	);
}

export default App;
