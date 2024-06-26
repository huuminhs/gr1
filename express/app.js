const express = require('express');
const config = require('./utils/config')
const cors = require('cors');
const app = express();
const postRouter = require('./routes/post.route');
const authRouter = require('./routes/auth.route');

app.use(express.json());
app.use(cors());

app.use('/api/post', postRouter)
app.use('/api/auth', authRouter)

// ----------------------------------------
app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
})
