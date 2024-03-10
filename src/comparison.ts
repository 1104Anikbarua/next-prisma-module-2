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

// mainNot();

const mainEquals = async () => {
  const findEquals = await prisma.user.findMany({
    where: {
      email: {
        equals: "user@gmail.com",
      },
    },
  });
  //   console.log(findEquals);
};

// mainEquals();

const mainUpdate = async () => {
  const updateResult = await prisma.user.update({
    where: {
      id: 2,
    },
    data: {
      email: "user2@hotmail.com",
    },
  });
};

// mainUpdate();

const mainEndsWith = async () => {
  const findResult = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "@hotmail.com",
      },
    },
  });
  console.log(findResult);
};

mainEndsWith();
