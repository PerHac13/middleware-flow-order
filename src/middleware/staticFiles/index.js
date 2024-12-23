export const staticFiles = (req, res, next) => {
  console.log("⏳ Entering Static Files Middleware");
  const staticExtensions = [".css", ".js", ".jpg", ".png"];
  const hasStaticExtension = staticExtensions.some((ext) =>
    req.url.endsWith(ext)
  );

  if (hasStaticExtension) {
    console.log("📁 Serving static file:", req.url);
    // Simulated static file serving
    if (req.url === "/test-static.js") {
      return res.send('console.log("Static file content");');
    }
  }
  next();
  console.log("✅ Exiting Static Files Middleware");
};
