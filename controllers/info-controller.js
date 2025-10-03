const { StatusCodes } = require("http-status-codes");

const info = (req, res) => {
  console.log("info-controller pe h");
  return res.status(StatusCodes.ACCEPTED).json({
    success: true,
    message: "API is live",
    error: {},
    data: {},
  });
};

module.exports = { info };
