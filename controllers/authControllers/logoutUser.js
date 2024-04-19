import { StatusCodes } from 'http-status-codes';

const logout = async (req, res) => {
  res.cookie('ant_eater', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'User is LOGOUT!' });
};

export { logout };
