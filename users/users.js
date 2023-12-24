import express from 'express';

export const userRouter = express.Router();

userRouter.use((req, res, next) => {
	console.log('обработчик user');
	next();
})

userRouter.post('/login', (req, res) => {
	res.send({ login: 'login' });
})

userRouter.post('/register', (req, res) => {
	res.send({ register: 'register' });
})
