import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const port = 3000;

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get("/api", ({ response }) => {
  response.body = "Hello world\nMy name is Diego";
});

console.log(`Server runnig on port ${port}`);

await app.listen({ port });
