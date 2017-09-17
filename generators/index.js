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
        path: '../server/controllers/{{dashCase name}}.controller.js',
        templateFile: './controller/template.hbs'
      }, {
        type: 'add',
        path: '../server/models/{{dashCase name}}.model.js',
        templateFile: './model/template.hbs'
      }, {
        type: 'add',
        path: '../server/routes/{{dashCase name}}.route.js',
        templateFile: './route/template.hbs'
      }, {
        type: 'add',
        path: '../server/tests/{{dashCase name}}.test.js',
        templateFile: './test/template.hbs'
      },
    ]
  });
};

