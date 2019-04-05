module.exports = {
  routeMethod: 'get',
  routePath: '/c',
  routeHandler: function cRoute(_, res) {
    return res.json({
      hello: 'world',
      from: 'c.js',
    });
  },
};
