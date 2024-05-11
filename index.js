import express from 'express';//노드 프레임워크
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connect from './config/connect.js';
import router from './routes/router.js';

const app = express()
const PORT = 8000
connect()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})

app.use(cors({
    origin: '*',
    method: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
    optionsSuccessStatus: 200
}))

app.use(express.urlencoded({extended:false}))

app.use('/', router)
app.use('/test', router)

app.listen(PORT, ()=>{
    console.log('테스트 서버 실행1')
})