module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of page?',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory? (optional)',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { name, dir } = answers;
      const path = `${dir ? `${dir}` : ``}`;
      const targetDir = `src/pages/${path}`;
      const props = `${name}Props`;
      return { ...answers, targetDir, props };
    });
  },
};
