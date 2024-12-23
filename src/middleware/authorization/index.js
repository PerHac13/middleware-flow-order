export const authorization = (req, res, next) => {
  console.log("⏳ Entering Authorization Middleware");
  const user = req.user;
  const requiredRole = req.query.requiredRole;

  if (requiredRole && user.role !== requiredRole) {
    console.log("🚫 Insufficient permissions");
    return res.status(403).json({ error: "Insufficient permissions" });
  }

  console.log("✅ User authorized");
  next();
  console.log("✅ Exiting Authorization Middleware");
};
