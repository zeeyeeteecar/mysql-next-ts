//import { PrismaClient } from "@prisma/client";
import { prisma } from "../prisma";

export default async function handle(req, res) {
  //const prisma = new PrismaClient();
  await prisma.$connect();

  const { Performer_id } = req.body;

  const result = await prisma.performer.delete({
    where: { Performer_id: Performer_id },
  });

  await prisma.$disconnect();
  res.json(result);
}
