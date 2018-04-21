const TABLE_NAME = 'transactions'


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, user_acc_id: 1, deposit: true, ammount: 240.00, purpose: 'Old Job Clutch'},
        {id: 2, user_acc_id: 1, deposit: false, ammount: 100.00, purpose: 'Pay Matthew Back'},
        {id: 3, user_acc_id: 2, deposit: true, ammount: 1690.00, purpose: 'Paycheck'},
        {id: 4, user_acc_id: 2, deposit: false, ammount: 210.00, purpose: 'Costco'},
        {id: 5, user_acc_id: 2, deposit: false, ammount: 600.00, purpose: 'Greyhound'},
        {id: 6, user_acc_id: 3, deposit: false, ammount: 70.00, purpose: 'good kush'},
        {id: 7, user_acc_id: 3, deposit: true, ammount: 990.00, purpose: 'Seld-Employed'},
        {id: 8, user_acc_id: 4, deposit: false, ammount: 120.00, purpose: 'And MY Axe!'},
        {id: 9, user_acc_id: 4, deposit: true, ammount: 2700.00, purpose: 'Quest Complete'},
      ]);
    });
};
