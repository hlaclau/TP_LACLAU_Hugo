import { useState } from "react";
import { ConfirmModal } from "./ConfirmModal";
import "./UserCard.css";

export function UserCard({ user, onDelete, onEdit }) {
	const [error, setError] = useState(null);
	const [showConfirm, setShowConfirm] = useState(false);

	const formattedDate = new Date(user.createdAt).toLocaleDateString("fr-FR", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const handleConfirmDelete = () => {
		setShowConfirm(false);
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
			<div className="user-card-actions">
				<button className="user-card-edit" onClick={() => onEdit(user)}>
					Modifier
				</button>
				<button
					className="user-card-delete"
					onClick={() => setShowConfirm(true)}
				>
					Supprimer
				</button>
			</div>
			{showConfirm && (
				<ConfirmModal
					title="Supprimer l'utilisateur"
					message={`Voulez-vous vraiment supprimer ${user.name} ?`}
					onConfirm={handleConfirmDelete}
					onCancel={() => setShowConfirm(false)}
				/>
			)}
		</div>
	);
}
