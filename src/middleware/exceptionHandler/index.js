export const exceptionHandler = (req, res, next) => {
  console.log("⏳ Entering Exception Handler Middleware");
  try {
    if (req.query.throwError === "true") {
      throw new Error("Test error thrown");
    }
    next();
  } catch (error) {
    console.error("🚫 Error caught:", error.message);
    res.status(500).json({ error: error.message });
    return;
  }
  console.log("✅ Exiting Exception Handler Middleware");
};
