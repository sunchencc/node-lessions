/*
 * @Author: sunchen
 * @Date: 2022-03-27 19:16:12
 * @LastEditors: sunchen
 * @LastEditTime: 2022-04-17 10:53:36
 * @Description: www.github.com
 */

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.res.setHeader('Set-Cookie', 'name=sunchen')
    await next()
  });

router.get('/a/:name', async (ctx, next) => {
    console.log('aaaaaa')
    console.log(ctx.params)
    await next()
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(async (ctx, next) => {
    console.log(ctx.request)
    await next()
})

app.use(async (ctx, next) => {
    ctx.body = 'hello world'
})

app.listen(3000)