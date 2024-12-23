export const routing = (req, res, next) => {
  console.log("⏳ Entering Routing Middleware");
  req.route = {
    path: req.url,
    method: req.method,
  };
  console.log("🛣️ Route:", req.method, req.url);
  next();
  console.log("✅ Exiting Routing Middleware");
};
