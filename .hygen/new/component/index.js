module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'Which Atomic Design category?',
        choices: ['molecules', 'organisms', 'templates', 'layouts'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of component?',
      },
      {
        type: 'confirm',
        name: 'have_container',
        message: 'Does it have container component?',
        default: 'yes',
      },
      {
        type: 'confirm',
        name: 'have_storybook',
        message: 'Does it have storybook?',
        default: 'yes',
      },
      {
        type: 'confirm',
        name: 'have_test',
        message: 'Does it have test file?',
        default: 'no',
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Where is the directory? (optional)',
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { category, name, dir } = answers;
      const path = `${category}/${dir ? `${dir}/` : ``}${name}`;
      const targetDir = `src/components/${path}`;
      const props = `${name}Props`;
      return { ...answers, targetDir, props };
    });
  },
};
