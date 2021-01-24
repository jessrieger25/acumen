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
    const files = await queryInterface.sequelize.query(`SELECT id from FILES;`);
    console.log(files);
    const fileRows = files[0];
    await queryInterface.bulkInsert(
      "Assignments",
      [
        {
          title: "Course 1",
          description: "description 1",
          submissionsAllowed: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Course 2",
          description: "description 2",
          submissionsAllowed: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const assignments = await queryInterface.sequelize.query(
      `SELECT id from ASSIGNMENTS;`
    );
    console.log(assignments);
    console.log(fileRows[0].id);
    const assignmentRows = assignments[0];
    console.log(assignmentRows[0].id);
    await queryInterface.bulkInsert(
      "AssignmentFiles",
      [
        {
          AssignmentId: assignmentRows[0].id,
          FileId: fileRows[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AssignmentId: assignmentRows[1].id,
          FileId: fileRows[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    console.log(files);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Assignments", null, {});
    await queryInterface.bulkDelete("AssignmentFiles", null, {});
  },
};
