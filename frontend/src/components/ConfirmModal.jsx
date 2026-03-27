import "./ConfirmModal.css";

export function ConfirmModal({ title, message, onConfirm, onCancel }) {
	return (
		<button
			type="button"
			className="modal-overlay"
			onClick={onCancel}
			onKeyDown={(e) => e.key === "Escape" && onCancel()}
		>
			<div
				className="modal"
				role="dialog"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
			>
				<p className="modal-title">{title}</p>
				<p className="modal-message">{message}</p>
				<div className="modal-actions">
					<button type="button" className="modal-cancel" onClick={onCancel}>
						Annuler
					</button>
					<button type="button" className="modal-confirm" onClick={onConfirm}>
						Supprimer
					</button>
				</div>
			</div>
		</button>
	);
}
