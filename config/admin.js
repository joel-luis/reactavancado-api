module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'df46fe123ffe1f223d1e466271f46333'),
  },
});
