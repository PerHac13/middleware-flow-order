export const hsts = (req, res, next) => {
  console.log("⏳ Entering HSTS Middleware");
  const maxAge = 31536000;
  res.setHeader(
    "Strict-Transport-Security",
    `max-age=${maxAge}; includeSubDomains`
  );
  console.log("📝 Set HSTS header with max-age:", maxAge);
  next();
  console.log("✅ Exiting HSTS Middleware");
};
