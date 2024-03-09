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

// create profile
// const main = async () => {
//   const createProfile = await prisma.profile.create({
//     data: {
//       bio: "This is user one bio",
//       userId: 1,
//     },
//   });
// };
// main();

// create category
// const main = async () => {
//   const createCategory = await prisma.category.create({
//     data: {
//       name: "programming",
//     },
//   });
//   console.log(createCategory);
// };

// delete category
// const main = async () => {
//   const deleteCategory = await prisma.category.delete({
//     where: {
//       id: 3,
//     },
//   });
// };
// main();

// create post in way - 1
// const main = async () => {
//   const createPost = await prisma.post.create({
//     data: {
//       title: "This is tile-1",
//       content: "This is content-1",
//       published: false,
//       userId: 1,
//       postCategory: {
//         create: {
//           category: {
//             connect: {
//               id: 2,
//             },
//           },
//         },
//       },
//     },
//     include: {
//       postCategory: true,
//     },
//   });
// };

// create post in way-2
// const main = async () => {
//   const createPost = await prisma.post.create({
//     data: {
//       title: "This is title-2",
//       content: "This is content-2",

//       published: false,
//       postCategory: {
//         create: {
//           categoryId: 2,
//         },
//       },
//       userId: 3,
//     },
//     include: {
//       postCategory: true,
//     },
//   });
//   console.log(createPost);
// };
// main();

// const main=async()=>{
//     const createCategory=await prisma.category.create({
//         data:{
//             name:"app development",
//             postCategory:{
//                 create:{
//                     post:{
//                         connect:{
//                             id:1
//                         }
//                     }
//                 }
//             }
//         }
//     })
// }

// const main = async () => {
//   const posts = await prisma.post.findMany({
//     include: {
//       postCategory: true,
//     },
//   });
//   console.log(posts);
// };

// main();
// const main = async () => {
//   const createMultiplePosts = await prisma.post.create({
//     data: {
//       title:
//         "when we have to insert more than one data to any model/table then we have to use array in create",
//       content: "Inserting multiple content",
//       published: false,
//       userId: 1,
//       postCategory: {
//         create: [
//           {
//             categoryId: 1,
//           },
//           { categoryId: 2 },
//           { categoryId: 4 },
//         ],
//       },
//     },
//   });
//   console.log(createMultiplePosts);
// };

// fluent api
// we are using id from post model/table and searching user from user table/model
// const main = async () => {
//   const populatePost = await prisma.post
//     .findUnique({
//       where: {
//         id: 4,
//       },
//     })
//     .user();

//   console.log(populatePost);
// };
// main();

// show post and user both information
// const main = async () => {
//   const populatePost = await prisma.post.findUnique({
//     where: {
//       id: 4,
//     },
//     include: {
//       user: true,
//     },
//   });
//   console.log(populatePost);
// };
// main();

// show post and use include to show user and post category information
// const main = async () => {
//   const populatePost = await prisma.post.findUnique({
//     where: {
//       id: 4,
//     },
//     include: {
//       user: true,
//       postCategory: true,
//     },
//   });
//   console.log(populatePost);
// };
// main();

// find those post where publish is true with realtion filter
const main = async () => {
  const filteredPost = await prisma.user.findMany({
    include: {
      Post: {
        where: {
          published: true,
        },
      },
    },
  });

  console.dir(filteredPost, { depth: Infinity });
};

main();

// update a post published status
const setPost = async () => {
  const updatePost = await prisma.post.update({
    where: {
      id: 1,
    },
    data: {
      published: true,
    },
  });
  console.log(updatePost);
};

// setPost();
