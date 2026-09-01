import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'foms-development-secret';

export const generateToken = (user: {
  id: number;
  username: string;
  role: string;
}) => {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role
    },
    JWT_SECRET,
    {
      expiresIn: '1h'
    }
  );
};