import express, { Application, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
import handelError from "./handlers/handelError";

const app: Application = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", routes);
app.use(handelError);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "welcome" });
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

export default app;
