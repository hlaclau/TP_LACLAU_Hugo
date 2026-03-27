import { useEffect, useState } from "react";
import "./UserForm.css";

const EMPTY = { name: "", email: "", role: "user" };

export function UserForm({ onSubmit, selectedUser, onCancel }) {
	const [form, setForm] = useState(EMPTY);
	const [error, setError] = useState(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [successMsg, setSuccessMsg] = useState(null);

	const isEditing = selectedUser !== null;

	useEffect(() => {
		if (selectedUser) {
			setForm({
				name: selectedUser.name,
				email: selectedUser.email,
				role: selectedUser.role,
			});
		} else {
			setForm(EMPTY);
		}
		setError(null);
	}, [selectedUser]);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!form.name.trim() || !form.email.trim()) {
			setError("Le nom et l'email sont requis.");
			return;
		}
		const msg = isEditing ? "Utilisateur modifié !" : "Utilisateur créé !";
		setError(null);
		setIsSubmitting(true);
		onSubmit(form)
			.then(() => {
				setForm(EMPTY);
				setSuccessMsg(msg);
				setTimeout(() => setSuccessMsg(null), 2000);
			})
			.catch((err) =>
				setError(
					err.response?.data?.message ?? "Erreur lors de la soumission.",
				),
			)
			.finally(() => setIsSubmitting(false));
	};

	return (
		<form className="user-form" onSubmit={handleSubmit}>
			<h2>{isEditing ? "Modifier l'utilisateur" : "Nouvel utilisateur"}</h2>
			{error && <p className="user-form-error">{error}</p>}
			{successMsg && <p className="user-form-success">{successMsg}</p>}
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
			<div className="user-form-actions">
				<button
					type="submit"
					className="user-form-submit"
					disabled={isSubmitting}
				>
					{isSubmitting ? "..." : isEditing ? "Mettre à jour" : "Créer"}
				</button>
				{isEditing && (
					<button type="button" className="user-form-cancel" onClick={onCancel}>
						Annuler
					</button>
				)}
			</div>
		</form>
	);
}
