import "./Navbar.css";

export function Navbar({ count }) {
	return (
		<nav className="navbar">
			<span className="navbar-title">Gestion des utilisateurs</span>
			{count !== undefined && (
				<span className="navbar-count">
					({count} utilisateur{count !== 1 ? "s" : ""})
				</span>
			)}
		</nav>
	);
}
