export const authentication = (req, res, next) => {
  console.log("⏳ Entering Authentication Middleware");
  const token = req.headers.authorization;

  if (!token) {
    console.log("🚫 Missing authentication token");
    return res.status(401).json({ error: "No token provided" });
  }

  if (token !== "Bearer valid-token") {
    console.log("🚫 Invalid token:", token);
    return res.status(401).json({ error: "Invalid token" });
  }

  req.user = { id: 1, role: "user" };
  console.log("👤 Authenticated user:", req.user);
  next();
  console.log("✅ Exiting Authentication Middleware");
};
