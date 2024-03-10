import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mainNestedInclude = async () => {
  const isMailExists = await prisma.post.findMany({
    where: {
      userId: 1,
    },
    include: {
      user: true,
      postCategory: {
        include: { category: true, post: true },
      },
    },
  });
  console.dir(isMailExists, { depth: Infinity });
};

// mainNestedInclude();
