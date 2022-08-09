import slugify from "slugify";

export const categoriesSeed = [
    {
        title: "server",
        slug: slugify("server"),
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        title: "Cloud",
        slug: slugify("cloud"),
        createdAt: new Date(),
        updatedAt: new Date()
    }      
];
