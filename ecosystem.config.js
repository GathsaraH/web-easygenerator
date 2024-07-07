module.exports = {
    apps: [
      {
        name: 'react-app',
        script: 'npx',
        args: 'serve -s build -l 8095',
        cwd: '/root/projects/gathsara/easygenerator/web-easygenerator',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  