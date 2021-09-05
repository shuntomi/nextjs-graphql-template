const { paramCase } = require('change-case');
module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'select',
        name: 'query_type',
        message: 'Which type is GraphQL query?',
        choices: ['queries', 'mutations', 'subscriptions'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of GraphQL query?(lowerCamel)',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { query_type, name } = answers;
      const targetDir = `src/graphql/${query_type}`;
      const fileName = paramCase(name);
      return { ...answers, targetDir, fileName };
    });
  },
};
