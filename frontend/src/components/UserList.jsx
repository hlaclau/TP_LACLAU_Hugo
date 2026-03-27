import { UserCard } from "./UserCard";

export function UserList({
	users,
	loading,
	error,
	onDelete,
	onEdit,
	filterRole,
}) {
	if (loading) return <p>Chargement...</p>;
	if (error) return <p>{error}</p>;
	if (users.length === 0) return <p>Aucun utilisateur</p>;

	return (
		<div className="user-grid">
			{users.map((user) => (
				<UserCard
					key={`${filterRole}-${user._id}`}
					user={user}
					onDelete={onDelete}
					onEdit={onEdit}
				/>
			))}
		</div>
	);
}
