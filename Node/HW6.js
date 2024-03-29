const Koa = require("koa");
const app = new Koa();

// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

// response

app.use(async (ctx) => {
  const url = ctx.request.url;

  if (url === "/") {
    ctx.body = "<h1>INDEX SAYFASI</h1>";
  } else if (url === "/about") {
    ctx.body = "<h1>ABOUT SAYFASI</h1>";
  } else if (url === "/contact") {
    ctx.body = "<h1>CONTACT SAYFASI</h1>";
  } else {
    ctx.body = "<h1>404 SAYFA BULUNAMADI</h1>";
  }
});

app.listen(3000);
