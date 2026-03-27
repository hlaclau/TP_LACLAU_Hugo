import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { userService } from "./services/userService";

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		userService.getAll().then((res) => setUsers(res.data.data));
	}, []);

	console.log(users);

	return (
		<>
			<Navbar count={users.length} />
			<h1> TP </h1>
		</>
	);
}

export default App;
