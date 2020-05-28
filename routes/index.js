var router = require('koa-router')();

router.get('/', async function (next) {
  await this.render('index', {
    title: 'Hello World Koa!'
  });
});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: JSON.stringify(this)
  });
});

router.get('/api/user', async (ctx, next) => {
  console.log(next)
  ctx.body = 'hello flitrue'
});

module.exports = router;
