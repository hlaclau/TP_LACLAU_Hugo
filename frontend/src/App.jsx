import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { UserList } from "./components/UserList";
import { userService } from "./services/userService";

function App() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		userService
			.getAll()
			.then((res) => setUsers(res.data.data))
			.catch(() => setError("Erreur lors du chargement des utilisateurs."))
			.finally(() => setLoading(false));
	}, []);

	const handleDelete = (id) => {
		userService
			.remove(id)
			.then(() => setUsers(users.filter((u) => u._id !== id)));
	};

	return (
		<>
			<Navbar count={users.length} />
			<UserList
				users={users}
				loading={loading}
				error={error}
				onDelete={handleDelete}
			/>
		</>
	);
}

export default App;
