import cors from 'cors';
import app from './app';

app.use(cors());
app.listen(3333, function() {
  console.log('CORS-enabled web server listening on port 3333');
});
