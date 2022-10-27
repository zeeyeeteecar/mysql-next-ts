//import { PrismaClient } from "@prisma/client";
import { prisma } from "../prisma";

export default async function handle(req, res) {
  //const prisma = new PrismaClient();
  await prisma.$connect();

  const { Performer_id, Performer_title } = req.body;

  const result = await prisma.performer.update({
    where: { Performer_id: Number(Performer_id) },
    data: {
      Performer_title: Performer_title,
    },
  });

  await prisma.$disconnect();
  res.json(result);
}
