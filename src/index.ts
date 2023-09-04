import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 7000;

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello, Typescript Express");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

//--watch : 변경을 감지할 파일을 지정할 수 있습니다.
//--exec : 실행할 명령어를 지정할 수 있습니다.
