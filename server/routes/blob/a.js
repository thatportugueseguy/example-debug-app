module.exports = {
  routeMethod: 'get',
  routePath: '/a',
  routeHandler: function aRoute(_, res) {
    return res.json({
      hello: 'world',
      from: 'a.js',
    });
  },
};
