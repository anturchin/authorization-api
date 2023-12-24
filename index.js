import express from 'express';

const port = 4000;
const app = express();


app.get('/', (req, res)=> {
	res.send('hello from express');
})


app.listen(port, () => {
	console.log(`server is running on port ${port}`);
})