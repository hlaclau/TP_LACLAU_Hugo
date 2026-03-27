import "./ConfirmModal.css";

export function ConfirmModal({ title, message, onConfirm, onCancel }) {
	return (
		<div className="modal-overlay" onClick={onCancel}>
			<div className="modal" onClick={(e) => e.stopPropagation()}>
				<p className="modal-title">{title}</p>
				<p className="modal-message">{message}</p>
				<div className="modal-actions">
					<button className="modal-cancel" onClick={onCancel}>
						Annuler
					</button>
					<button className="modal-confirm" onClick={onConfirm}>
						Supprimer
					</button>
				</div>
			</div>
		</div>
	);
}
