import express from "express";


const app = express();

app.use(express.json());


//Routes

//app.use('/auth', authRoutes);
//app.use('/users', userRoutes);

export default app;