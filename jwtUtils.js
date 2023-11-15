import jwt from 'jsonwebtoken';

const secretKey = 'votre_clé_secrète'; 

export const generateToken = (userId) => {
  return jwt.sign({ userId }, secretKey, { expiresIn: '24 heures' });
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null; // La vérification a échoué
  }
};
