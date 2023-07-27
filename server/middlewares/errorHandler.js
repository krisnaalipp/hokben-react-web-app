async function errorHandler(err, req, res, next) {
  let msg;
  let code;
  if (err.name === "SequelizeValidationError") {
    msg = err.errors[0].message;
    code = 400;
  } else if (err.name === "SequelizeUniqueConstraintError") {
    code = 400;
    msg = err.errors[0].message;
  } else if (err.name === "Data not found") {
    code = 404;
    msg = err.name;
  } else if (err.name === "Not Login") {
    code = 401;
    msg = "Please Login First";
  } else if (err.name === "Invalid email or password") {
    code = 401;
    msg = err.name;
  } else if (err.name === "JsonWebTokenError") {
    code = 401;
    msg = "Invalid token";
  } else if (err.name === "Forbidden") {
    code = 403;
    msg = err.name;
  } else if (err.name === "Invalid Input") {
    code = 400;
    msg = err.name;
  } else {
    code = 500;
    msg = "Internal server error";
  }
  res.status(code).json({ msg });
}

module.exports = errorHandler;
