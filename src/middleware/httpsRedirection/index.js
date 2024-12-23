export const httpsRedirection = (req, res, next) => {
  console.log("⏳ Entering HTTPS Redirection Middleware");
  const forwardedProto = req.headers["x-forwarded-proto"];

  if (forwardedProto === "http") {
    const httpsUrl = `https://${req.headers.host}${req.url}`;
    console.log("🔄 Redirecting to:", httpsUrl);
    return res.redirect(301, httpsUrl);
  }
  next();
  console.log("✅ Exiting HTTPS Redirection Middleware");
};
