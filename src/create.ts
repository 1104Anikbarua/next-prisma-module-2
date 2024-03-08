import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();
// create user
// const main = async () => {
//   const createUser = await prisma.user.create({
//     data: {
//       userName: "user_3",
//       email: "user3@gmail.com",
//       role: Role.user,
//     },
//   });
//   console.log(createUser);
// };

// main();

const main = async () => {
  const createProfile = await prisma.profile.create({
    data: {
      bio: "This is user one bio",
      userId: 1,
    },
  });
};

main();
