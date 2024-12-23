export const cors = (req, res, next) => {
  console.log("⏳ Entering CORS Middleware");
  const allowedOrigins = ["http://localhost:3000", "https://example.com"];
  const origin = req.headers.origin;

  if (!origin) {
    console.log("⚠️ No origin header present");
    next();
    return;
  }

  if (!allowedOrigins.includes(origin)) {
    console.log("🚫 Blocked request from unauthorized origin:", origin);
    return res.status(403).json({
      error: "CORS Error: Origin not allowed",
    });
  }

  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  console.log("✅ Allowed CORS for origin:", origin);
  next();
  console.log("✅ Exiting CORS Middleware");
};
