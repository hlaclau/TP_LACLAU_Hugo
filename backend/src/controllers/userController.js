import mongoose from "mongoose";
import UserModel from "../models/userModel.js";

export const getAllUsers = async (req, res, next) => {
	try {
		const { role, search, page = 1, limit } = req.query;
		const filter = {};
		if (role) filter.role = role;
		if (search) filter.name = new RegExp(search, "i");

		if (limit !== undefined) {
			const pageNum = Math.max(1, parseInt(page, 10));
			const limitNum = Math.max(1, parseInt(limit, 10));
			const skip = (pageNum - 1) * limitNum;

			const [data, totalCount] = await Promise.all([
				UserModel.find(filter).skip(skip).limit(limitNum),
				UserModel.countDocuments(filter),
			]);

			return res.status(200).json({
				success: true,
				page: pageNum,
				limit: limitNum,
				totalCount,
				totalPages: Math.ceil(totalCount / limitNum),
				data,
			});
		}

		const data = await UserModel.find(filter);
		res.status(200).json({ success: true, count: data.length, data });
	} catch (err) {
		next(err);
	}
};

export const getUserById = async (req, res, next) => {
	try {
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
	} catch (err) {
		next(err);
	}
};

export const createUser = async (req, res, next) => {
	try {
		const { name, email, role } = req.body;

		if (!name || !email) {
			return res.status(400).json({
				success: false,
				message: "Les champs name et email sont requis",
			});
		}

		const newUser = await UserModel.create({ name, email, role });
		res.status(201).json({ success: true, data: newUser });
	} catch (err) {
		next(err);
	}
};

export const updateUser = async (req, res, next) => {
	try {
		const { id } = req.params;

		if (!mongoose.isValidObjectId(id)) {
			return res.status(400).json({ success: false, message: "ID invalide" });
		}

		const { _id, createdAt, ...fields } = req.body;

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
		next(err);
	}
};

export const deleteUser = async (req, res, next) => {
	try {
		const { id } = req.params;

		if (!mongoose.isValidObjectId(id)) {
			return res.status(400).json({ success: false, message: "ID invalide" });
		}

		const deleted = await UserModel.findByIdAndDelete(id);
		if (!deleted) {
			return res
				.status(404)
				.json({ success: false, message: "Utilisateur non trouvé" });
		}

		res.status(204).send();
	} catch (err) {
		next(err);
	}
};
