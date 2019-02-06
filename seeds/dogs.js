exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dogs")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("dogs").insert([
        {
          id: 201,
          breed: "Australian Terrier",
          origin: "Australia",
          characteristics: "friendly, affectionate",
          exercise: "medium",
          coat: "short",
          space_requirements: "apartment or country",
          image_url: "/images/Australian-Terrier.jpg"
        },
        {
          id: 202,
          breed: "Basenji",
          origin: "Africa",
          characteristics: "Affectionate, intelligent",
          exercise: "High",
          coat: "short-hair",
          space_requirements: "house, country",
          image_url: "/images/Basenji.jpg"
        },
        {
          id: 203,
          breed: "Dalmatian",
          origin: "Croatia",
          characteristics: "Affectionate, intelligent",
          exercise: "High",
          coat: "short-hair",
          space_requirements: "house, country",
          image_url: "/images/Dalmatian.jpg"
        }
      ]);
    });
};
