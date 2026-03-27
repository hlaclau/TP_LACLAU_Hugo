import { useState } from "react";
import "./UserForm.css";

const EMPTY = { name: "", email: "", role: "user" };

export function UserForm({ onSubmit }) {
	const [form, setForm] = useState(EMPTY);
	const [error, setError] = useState(null);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.name.trim() || !form.email.trim()) {
			setError("Le nom et l'email sont requis.");
			return;
		}
		setError(null);
		onSubmit(form)
			.then(() => setForm(EMPTY))
			.catch((err) =>
				setError(err.response?.data?.message ?? "Erreur lors de la création."),
			);
	};

	return (
		<form className="user-form" onSubmit={handleSubmit}>
			<h2>Nouvel utilisateur</h2>
			{error && <p className="user-form-error">{error}</p>}
			<input
				name="name"
				type="text"
				placeholder="Nom"
				value={form.name}
				onChange={handleChange}
			/>
			<input
				name="email"
				type="email"
				placeholder="Email"
				value={form.email}
				onChange={handleChange}
			/>
			<select name="role" value={form.role} onChange={handleChange}>
				<option value="user">user</option>
				<option value="admin">admin</option>
			</select>
			<button type="submit" className="user-form-submit">
				Créer
			</button>
		</form>
	);
}
