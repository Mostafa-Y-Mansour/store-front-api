import express from "express";

const handelError = (
  error: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  return res.status(401).json({
    message: error.message,
  });
};

export default handelError;
