module.exports = (req, res, next) => {
  if (!req.session.persona) {
    return res.json({
      msg: "no hay sesiones creadas",
    });
  } else {
    next();
  }
};
