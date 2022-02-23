module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8b079975b6786761877395c7c15fd6ba'),
  },
});
