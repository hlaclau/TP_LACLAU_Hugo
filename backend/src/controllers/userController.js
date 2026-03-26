import mongoose from "mongoose";
import UserModel from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
	const { role } = req.query;
	const filter = role ? { role } : {};
	const data = await UserModel.find(filter);
	res.status(200).json({ success: true, count: data.length, data });
};

export const getUserById = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.isValidObjectId(id)) {
		return res.status(400).json({ success: false, message: "ID invalide" });
	}

	const user = await UserModel.findById(id);
	if (!user) {
		return res
			.status(404)
			.json({ success: false, message: "Utilisateur non trouvé" });
	}
	res.status(200).json({ success: true, data: user });
};

export const createUser = async (req, res) => {
	const { name, email, role } = req.body;

	if (!name || !email) {
		return res.status(400).json({
			success: false,
			message: "Les champs name et email sont requis",
		});
	}

	try {
		const newUser = await UserModel.create({ name, email, role });
		res.status(201).json({ success: true, data: newUser });
	} catch (err) {
		if (err.code === 11000) {
			return res
				.status(409)
				.json({ success: false, message: "Cet email est déjà utilisé" });
		}
		throw err;
	}
};

export const updateUser = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.isValidObjectId(id)) {
		return res.status(400).json({ success: false, message: "ID invalide" });
	}

	const { _id, createdAt, ...fields } = req.body;

	try {
		const updated = await UserModel.findByIdAndUpdate(id, fields, {
			new: true,
			runValidators: true,
		});

		if (!updated) {
			return res
				.status(404)
				.json({ success: false, message: "Utilisateur non trouvé" });
		}

		res.status(200).json({ success: true, data: updated });
	} catch (err) {
		if (err.code === 11000) {
			return res
				.status(409)
				.json({ success: false, message: "Cet email est déjà utilisé" });
		}
		throw err;
	}
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
