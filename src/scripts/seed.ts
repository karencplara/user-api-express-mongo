import { connectDatabase } from '../configs/database';
import { User } from '../models/User';

async function seed() {
  await connectDatabase();

  const users = [
    { name: 'Karen Lara', email: 'karen.lara@outlook.com', age: 29 },
    { name: 'Ellie', email: 'ellie@gmail.com', age: 18 },
    { name: 'Savannah', email: 'savannah@gmail.com', age: 22 },
    { name: 'Renato de Jesus', email: 'renato@outlook.com', age: 29 },
  ];

  await User.deleteMany({});
  await User.insertMany(users);

  console.log('Seed completed!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed error:', err);
  process.exit(1);
});