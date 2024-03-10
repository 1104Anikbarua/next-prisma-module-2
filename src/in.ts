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

const mainUpdate = async () => {
  const updateResult = await prisma.user.update({
    where: {
      id: 3,
    },
    data: {
      email: "user3@yahoo.com",
    },
  });
};
mainUpdate();

const mainIn = async () => {
  const isMailExists = await prisma.user.findMany({
    where: {
      email: {
        in: ["user@gmail.com", "user2@hotmail.com"],
      },
    },
  });
  console.log(isMailExists);
};
mainIn();
