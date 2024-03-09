import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const mainAnd = async () => {
  const findPosts = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title-1",
            // mode: "insensitive",
          },
        },
        {
          published: {
            equals: true,
          },
        },
      ],
    },
  });
  console.log(findPosts);
};

// mainAnd();

const main = async () => {
  const updatePost = await prisma.post.update({
    where: {
      id: 2,
    },
    data: {
      title: "This is title-1",
      published: true,
    },
  });
};
// main();

const mainOr = async () => {
  const filterPosts = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title-3",
          },
        },
        {
          title: {
            contains: "title-2",
          },
        },
      ],
    },
  });
  console.log(filterPosts);
};

// mainOr();

const mainNot = async () => {
  const postResults = await prisma.category.findMany({
    where: {
      OR: [
        {
          name: {
            startsWith: "web",
          },
        },
        {
          name: {
            startsWith: "pr",
          },
        },
      ],
      NOT: [
        {
          name: {
            startsWith: "pr",
          },
        },
      ],
    },
  });

  console.log(postResults);
};

mainNot();
