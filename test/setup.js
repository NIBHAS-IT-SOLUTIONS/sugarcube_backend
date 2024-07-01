const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

before((done) => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => done())
    .catch(err => done(err));
});

after((done) => {
  mongoose.connection.close(() => done());
});
