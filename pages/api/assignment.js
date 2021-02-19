import prisma from '../../lib/prisma';


export default function handler(req, res) {
    if (req.method === "POST") {
        const result = await prisma.assignment.create({
            data: {
                ...req.body,
            },
            })
            res.json(result)
    } else if (req.method === "GET") {
        // TODO: file objects too
        const assignments = await prisma.assignment.findMany()
        res.json(assignments)    
    } else {
    }
}