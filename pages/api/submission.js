import prisma from '../../lib/prisma';


export default function handler(req, res) {
    if (req.method === "POST") {
        const result = await prisma.submission.create({
            data: {
                ...req.body,
            },
            })
            res.json(result)
    } else if (req.method === "GET") {
        // TODO: file objects too
        const submissions = await prisma.submission.findMany()
        res.json(submissions)    
    } else {
    }
}