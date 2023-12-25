import express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './users/users.js';

const port = 4000;
const app = express();


app.use((req, res, next) => {
	console.log(`время ${Date.now()}`);
	next();
})

app.get('/', (req, res) => {
	throw new Error('error');
})

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log(err.message);
	res.status(500);
	res.send({
		message: err.message,
	});
})

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
})