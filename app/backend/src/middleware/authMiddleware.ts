import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'foms-development-secret';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    username: string;
    role: string;
  };
}

export const authenticateToken = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access token required'
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    if (typeof decoded === 'string') {
      return res.status(401).json({
        success: false,
        message: 'Invalid access token'
      });
    }

    req.user = {
      id: decoded.id as number,
      username: decoded.username as string,
      role: decoded.role as string
    };

    next();
  } catch {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired access token'
    });
  }
};