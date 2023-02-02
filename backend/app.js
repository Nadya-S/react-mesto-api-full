const express = require('express');

const { PORT = 3000 } = process.env;
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const { errors } = require('celebrate');
// const corsHandling = require('./middlewares/cors-handling');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const authRouter = require('./routes/auth');
const auth = require('./middlewares/auth');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const { NotFoundError } = require('./errors/Errors');
const err = require('./middlewares/err');

const corsOptions = {
  origin: [
    'http://mesto.ns.nomoredomainsclub.ru',
    'https://mesto.ns.nomoredomainsclub.ru',
    'https://api.mesto.ns.nomoredomainsclub.ru',
    'http://api.mesto.ns.nomoredomainsclub.ru',
    'http://localhost:3000/',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const app = express();
app.use('*', cors(corsOptions));

app.use(helmet());
app.use(limiter);

app.use(express.json());
app.use(requestLogger);
app.use('/', authRouter);

app.use('/users', auth, userRouter);
app.use('/cards', auth, cardRouter);
app.use('*', auth, () => {
  throw new NotFoundError('Путь не найден');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.use(errorLogger);
app.use(errors());
app.use(err);

// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});
