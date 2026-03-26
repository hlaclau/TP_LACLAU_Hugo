import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import User from '../models/userModel.js';

const seedUsers = [
  {
    name: 'Nicolas LeTigre',
    email: 'tieun@tigre.com',
    role: 'admin',
    createdAt: new Date('2025-03-24'),
  },
  {
    name: 'Tommy Dumoumou',
    email: 'tommyditleking@gmail.com',
    role: 'user',
    createdAt: new Date('2025-03-24'),
  },
  {
    name: 'Simon Dugoat',
    email: 'joueurdechecquibatdesenfants@gmail.com',
    role: 'user',
    createdAt: new Date('2025-03-24'),
  },
];

await connectDB();

const count = await User.countDocuments();

if (count > 0) {
  console.log(`Collection already contains ${count} user(s), skipping seed.`);
} else {
  await User.insertMany(seedUsers);
  console.log(`${seedUsers.length} users inserted successfully.`);
}

mongoose.connection.close();
