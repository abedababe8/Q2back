const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, name: 'Abe Queen', username:'abe', password:'$2a$10$RvgwZArt8zbnhXH.fNIJTOAnAt6CbZedVgwwlIDa.GnzKOAyYBaF2'},
        {id: 2, name: 'Lily Ward', username:'lil', password:'$2a$10$Oo1IakKyieAQ87tTo8TNRO/ZIniKgMfHRAUAOhulRk4N5EJP26cES'},
        {id: 3, name: 'Sam Shroom', username:'sam', password:'$2a$10$Sczhd/RWQxrhSv6WMRYfmO8c1CnWXuiMr6XgV46/kOdilwQ2i8CM6'},
        {id: 4, name: 'Roger the Barbarian', username:'rog', password:'$2a$10$pE0r9GJLRFAbdbh2YlFs0.UijgTAE0nJ2iZqloYH3Nu/8q0pvryyu'}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
})
};
