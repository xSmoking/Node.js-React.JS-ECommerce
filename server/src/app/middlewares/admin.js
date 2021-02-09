import User from '../models/User';

export default async (req, res, next) => {
  const user = await User.findByPk(req.userId);

  if (user.rank_id < 2) {
    return res.status(401).json({ error: 'Não autorizado' });
  }

  return next();
};
