import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const result = await prisma.file.create({
      data: {
        ...req.body,
      },
    });
    res.json(result);
  } else if (req.method === "GET") {
    // TODO: file objects too
    const files = await prisma.file.findMany();
    res.json(files);
  } else {
  }
}
