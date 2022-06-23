/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {
      title: "Top Gun: Maverick"
    },
    {
      title: "Christine"
    },
    {
      title: "Garbage Pail Kids"
    },
    {
      title: "Fast and Furious"
    },
    {
      title: "Heaven is Real"
    }
  ])
};
