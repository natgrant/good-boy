exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 101,
          lifestyle: "active",
          housing: "apartment",
          allergies: "none",
          age: 23
        },
        {
          id: 102,
          lifestyle: "sedentary",
          housing: "apartment",
          allergies: "yes",
          age: 55
        },
        {
          id: 103,
          lifestyle: "highly active",
          housing: "house",
          allergies: "none",
          age: 33
        },
        {
          id: 104,
          lifestyle: "highly active",
          housing: "apartment",
          allergies: "none",
          age: 28
        },
        {
          id: 105,
          lifestyle: "sedentary",
          housing: "house, no yard",
          allergies: "none",
          age: 30
        }
      ]);
    });
};
