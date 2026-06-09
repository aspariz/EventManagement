import express from 'express';
import cors from 'cors';

// Remove the .js extensions here:
import eventRoute from './routes/eventRoute';
import categoryRoute from './routes/categoryRoute';
import speakerRoute from './routes/speakerRoute';
import authRoute from './routes/authRoutes';
import userRoute from './routes/userRoute';

const app = express();
const port = 3000;

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/auth', authRoute);
app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.send('Hello, ini adalah api Invofest!');
});

app.use('/events', eventRoute);
app.use('/categories', categoryRoute);
app.use('/speakers', speakerRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});