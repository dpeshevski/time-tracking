import Errors from '../utils/errors';

const handleErrors = (err, req, res, next) => {
  if (err instanceof Errors.GeneralError) {
    return res.status(err.getCode()).json({
      status: 'error',
      message: err.message
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err.message
  });
}

export default handleErrors;
