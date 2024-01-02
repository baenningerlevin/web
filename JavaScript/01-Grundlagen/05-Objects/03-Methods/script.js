// 4. Objects
'use strict';
// 4.3 Object Methods

const levin = {
  firstName: 'Levin',
  lastName: 'Bänninger',
  birthYear: 2007,
  job: 'Student',
  friends: ['Jonas', 'Marie', 'Peter'],
  hasDriversLicense: true,

  /* calcAge: function (birthYear) {
    return 2023 - birthYear;
  }, */

  /* calcAge: function () {
    return 2023 - this.birthYear;
  }, */

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  },
};

/* console.log(levin.calcAge(2007)); // 16 */
console.log(levin.calcAge()); // 16
console.log(levin.age); // 16

console.log(levin.getSummary());
