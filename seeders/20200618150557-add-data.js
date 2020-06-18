'use strict';

const { NetworkAuthenticationRequire } = require("http-errors");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Breakfast',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        name: 'Lunch',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        name: 'Dinner',
        updatedAt: new Date(),
        createdAt: new Date()
      },
      {
        name: 'Dessert',
        updatedAt: new Date(),
        createdAt: new Date()
      },
    ]);

    await queryInterface.bulkInsert('Recipes', [
      {
        name: "Chicken Tacos",
        review: "Diggity Dank!",
        description: "Corn tortillas, juicy meat, lime, cilantro.",
        url: "http://therealtacobell.com",
        likes: 8,
        vegetarian: false,
        vegan: false,
        glutenfree: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Impossible Burger",
        review: "OO0000-WEEEEEE!",
        description: "2 thin impossible meat patties surrounded by hot buns and covered in all the fixins'!",
        url: "http://impossibleshit.com",
        likes: 12,
        vegetarian: true,
        vegan: true,
        glutenfree: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pumpkin Pie",
        review: "Yummy",
        description: "Organic Pumpkin and Pie",
        url: "http://piepiepiepie.com",
        likes: 7,
        vegetarian: true,
        vegan: true,
        glutenfree: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lasagna",
        review: "Uncle Tony likes it..",
        description: "Layers of meat, noodles, cheese, and pasta!",
        url: "http://uncletonyslasagna.com",
        likes: 18,
        vegetarian: false,
        vegan: false,
        glutenfree: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Steak & Eggs",
        review: "Breakfast Protein!",
        description: "Thin cut NY Strip cooked to order with 3 eggs any style",
        url: "http://proteinforbreakfast.com",
        likes: 99,
        vegetarian: false,
        vegan: false,
        glutenfree: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Turkey Panini',
        review: 'I eat it everyday.',
        description: 'Its good and hot.',
        url: 'http://kushsandys.com',
        likes: 11,
        vegetarian: false,
        vegan: false,
        glutenfree: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fried Rice',
        review: 'It has got it all plus rice',
        description: 'Chicken, eggs, veggies and rice',
        url: 'http://kushfriedrice.com',
        likes: 55,
        vegetarian: false,
        vegan: false,
        glutenfree: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);

    return await queryInterface.bulkInsert('RecipesCategories', [
      {
        recipesId: 1,
        categoriesId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 1,
        categoriesId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 2,
        categoriesId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 2,
        categoriesId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 3,
        categoriesId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 4,
        categoriesId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 4,
        categoriesId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 5,
        categoriesId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 5,
        categoriesId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 5,
        categoriesId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 6,
        categoriesId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 7,
        categoriesId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        recipesId: 7,
        categoriesId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('RecipesCategories', null, {});
    await queryInterface.bulkDelete('Recipes', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
