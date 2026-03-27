import { useState } from "react";
import "./UserCard.css";

export function UserCard({ user, onDelete }) {
	const [error, setError] = useState(null);

	const formattedDate = new Date(user.createdAt).toLocaleDateString("fr-FR", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const handleDelete = () => {
		onDelete(user._id).catch((err) =>
			setError(err.response?.data?.message ?? "Erreur lors de la suppression."),
		);
	};

	return (
		<div className="user-card">
			<div className="user-card-header">
				<p className="user-card-name">{user.name}</p>
				<span className={`user-card-role ${user.role}`}>{user.role}</span>
			</div>
			<p className="user-card-email">{user.email}</p>
			<p className="user-card-date">Créé le {formattedDate}</p>
			{error && <p className="user-card-error">{error}</p>}
			<button className="user-card-delete" onClick={handleDelete}>
				Supprimer
			</button>
		</div>
	);
}
