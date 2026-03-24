import { users } from '../data/users.js';

const getAll = (role) => {
  return role ? users.filter((u) => u.role === role) : users;
};

const getById = (id) => {
  return users.find((u) => u.id === id) || null;
};

const isEmailTaken = (email, excludeId = null) => {
  return users.some((u) => u.email === email && u.id !== excludeId);
};

const create = (data) => {
  const newUser = {
    id: users[users.length - 1].id + 1,
    name: data.name,
    email: data.email,
    role: data.role || 'user',
    createdAt: new Date().toISOString().split('T')[0],
  };
  users.push(newUser);
  return newUser;
};

const update = (id, data) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;
  const { id: _id, createdAt: _createdAt, ...updates } = data;
  users[index] = { ...users[index], ...updates };
  return users[index];
};

const remove = (id) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return false;
  users.splice(index, 1);
  return true;
};

export default { getAll, getById, isEmailTaken, create, update, remove };
