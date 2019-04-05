module.exports = {
  routeMethod: 'get',
  routePath: '/b',
  routeHandler: function bRoute(_, res) {
    return res.json({
      hello: 'world',
      from: 'b.js',
    });
  },
};
