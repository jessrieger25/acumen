import prisma from '../../lib/prisma';


export default function handler(req, res) {
    if (req.method === "POST") {
        const result = await prisma.course.create({
            data: {
                ...req.body,
            },
            })
            res.json(result)
    } else if (req.method === "GET") {
        // TODO: file objects too
        const instructors = await prisma.instructor.findMany()
        res.json(instructors)    
    } else {
    }
}