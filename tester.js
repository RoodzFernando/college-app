const jwt = require('jsonwebtoken');

const token = jwt.sign(
  {
    e: 'hello',
  },
  'hello'
);

console.log(token);
