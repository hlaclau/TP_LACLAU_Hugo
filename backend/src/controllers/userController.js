import UserModel from "../models/userModel.js";

export const getAllUsers = (req, res) => {
	const { role } = req.query;
	const data = UserModel.getAll(role);
	res.status(200).json({ success: true, count: data.length, data });
};

export const getUserById = (req, res) => {
	const user = UserModel.getById(parseInt(req.params.id, 10));
	if (!user) {
		return res
			.status(404)
			.json({ success: false, message: "Utilisateur non trouvé" });
	}
	res.status(200).json({ success: true, data: user });
};

export const createUser = (req, res) => {
	const { name, email, role } = req.body;

	if (!name || !email) {
		return res.status(400).json({
			success: false,
			message: "Les champs name et email sont requis",
		});
	}

	if (UserModel.isEmailTaken(email)) {
		return res
			.status(409)
			.json({ success: false, message: "Cet email est déjà utilisé" });
	}

	const newUser = UserModel.create({ name, email, role });
	res.status(201).json({ success: true, data: newUser });
};

export const updateUser = (req, res) => {
	const id = parseInt(req.params.id, 10);
	const user = UserModel.getById(id);

	if (!user) {
		return res
			.status(404)
			.json({ success: false, message: "Utilisateur non trouvé" });
	}

	const { email } = req.body;
	if (email && UserModel.isEmailTaken(email, id)) {
		return res
			.status(409)
			.json({ success: false, message: "Cet email est déjà utilisé" });
	}

	const updated = UserModel.update(id, req.body);
	res.status(200).json({ success: true, data: updated });
};

export const deleteUser = (req, res) => {
	const deleted = UserModel.remove(parseInt(req.params.id, 10));
	if (!deleted) {
		return res
			.status(404)
			.json({ success: false, message: "Utilisateur non trouvé" });
	}
	res.status(204).send();
};
