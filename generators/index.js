module.exports = (plop) => {
  plop.setGenerator('model', {
    description: 'input model name',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is model‘s name',
      validate: function (value) {
        if ((/.+/).test(value)) { return true; }
        return 'name is required';
      }
    }],
    actions: [
      {
        type: 'add',
        path: '../server/controllers/{{lowerCase name}}.controller.js',
        templateFile: './controller/template.hbs'
      }, {
        type: 'add',
        path: '../server/models/{{lowerCase name}}.model.js',
        templateFile: './model/template.hbs'
      }, {
        type: 'add',
        path: '../server/routes/{{lowerCase name}}.route.js',
        templateFile: './route/template.hbs'
      }, {
        type: 'add',
        path: '../server/tests/{{lowerCase name}}.test.js',
        templateFile: './test/template.hbs'
      },
    ]
  });
};

