import express from 'express';
import { users } from '../data/users.js';

const router = express.Router();

router.get('/', (req, res) => {
  const { role } = req.query;
  const filtered = role ? users.filter((u) => u.role === role) : users;

  res.status(200).json({
    success: true,
    count: filtered.length,
    data: filtered,
  });
});

router.get('/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id, 10));

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'Utilisateur non trouvé',
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

router.put('/:id', (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id, 10));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Utilisateur non trouvé',
    });
  }

  const { id, createdAt, ...updates } = req.body;

  users[index] = { ...users[index], ...updates };

  res.status(200).json({
    success: true,
    data: users[index],
  });
});

router.delete('/:id', (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id, 10));

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: 'Utilisateur non trouvé',
    });
  }

  users.splice(index, 1);

  res.status(204).send();
});

router.post('/', (req, res) => {
  const { name, email, role } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Les champs name et email sont requis',
    });
  }

  const newUser = {
    id: users[users.length - 1].id + 1,
    name,
    email,
    role: role || 'user',
    createdAt: new Date().toISOString().split('T')[0],
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    data: newUser,
  });
});

export default router;
