"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Files",
      [
        {
          name: "hello_world.py",
          path: "/tmp/hello_world.py",
          type: "Assignment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "bob_is_great.py",
          path: "/tmp/bob_is_great.py",
          type: "Assignment",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Files", null, {});
  },
};
