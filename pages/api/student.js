import prisma from '../../lib/prisma';


export default function handler(req, res) {
    if (req.method === "POST") {
        const result = await prisma.student.create({
            data: {
                ...req.body,
            },
            })
            res.json(result)
    } else if (req.method === "GET") {
        // TODO: file objects too
        const students = await prisma.student.findMany()
        res.json(students)    
    } else {
    }
}