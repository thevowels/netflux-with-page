import {NextApiRequest, NextApiResponse} from 'next';
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        console.log('req post request error')
        return res.status(405).end();
    }
    try{
        await serverAuth(req).then(
            ({currentUser}) => {
                return res.status(200).json(currentUser)
            }
        );

        // return res.status(200).json(currentUser);
    }catch(error){
        console.log('Error from current.ts', error);
        return res.status(400).end();
    }
}