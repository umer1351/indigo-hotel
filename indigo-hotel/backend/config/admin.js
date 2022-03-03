module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '977d91fda68125f48e303bb95f1dc58b'),
  },
});
