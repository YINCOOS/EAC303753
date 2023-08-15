import express, {Request, Response} from 'express';

const router = express.Router();

router.get('/', (req:Request, res:Response) => {
 res.status(200).send(`WELCOME TO POKEMON API`)
})


export default router;