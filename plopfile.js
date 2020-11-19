const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + "is required!";
    }
    return true;
  };
};

module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("basics", {
    description: "this is a skeleton plopfile",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name of the component?",
        validate: requireField("name"),
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path:
          "src/components/{{pascalCase name}}/{{pascalCase name}}.stories.js",
        templateFile: "plop-templates/components/component.stories.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.js",
        templateFile: "plop-templates/components/component.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.js",
        templateFile: "plop-templates/components/component.test.js.hbs",
      },
      {
        type: "add",
        path:
          "src/components/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/components/component.module.css.hbs",
      },
    ], // array of actions
  });
};
