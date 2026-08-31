import { Request, Response } from 'express';
import { users } from '../data/users';
import { generateToken } from '../utils/jwt';

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: 'Username and password required'
    });
  }

  const user = users.find(
    u => u.username === username &&
         u.password === password
  );

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
 
 const token = generateToken({
  id: user.id,
  username: user.username,
  role: user.role
});

  return res.json({
  success: true,
  user: {
    id: user.id,
    username: user.username,
    role: user.role
  },
  token
});
};