import app from './app.js';

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`App listening At http://localhost:${port}`);
});

export default app;
