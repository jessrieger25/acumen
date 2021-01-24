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
    console.log("files");
    const files = await queryInterface.sequelize.query(`SELECT id from FILES;`);

    const fileRows = files[0];
    console.log(files);

    await queryInterface.bulkInsert(
      "Submissions",
      [
        {
          completed: false,
          grade: "A",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          completed: false,
          grade: "B",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    const submissions = await queryInterface.sequelize.query(
      `SELECT id from SUBMISSIONS;`
    );
    console.log(submissions);
    console.log(fileRows[0].id);
    const submissionRows = submissions[0];
    await queryInterface.bulkInsert(
      "SubmissionFiles",
      [
        {
          SubmissionId: submissionRows[0].id,
          FileId: fileRows[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          SubmissionId: submissionRows[1].id,
          FileId: fileRows[0].id,
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
    await queryInterface.bulkDelete("Submissions", null, {});
    await queryInterface.bulkDelete("SubmissionFiles", null, {});
  },
};
