import "./UserCard.css";

export function UserCard({ user, onDelete }) {
	const formattedDate = new Date(user.createdAt).toLocaleDateString("fr-FR", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	return (
		<div className="user-card">
			<div className="user-card-header">
				<p className="user-card-name">{user.name}</p>
				<span className={`user-card-role ${user.role}`}>{user.role}</span>
			</div>
			<p className="user-card-email">{user.email}</p>
			<p className="user-card-date">Créé le {formattedDate}</p>
			<button className="user-card-delete" onClick={() => onDelete(user._id)}>
				Supprimer
			</button>
		</div>
	);
}
