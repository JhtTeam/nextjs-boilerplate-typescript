const R = require("ramda");

const requireField = fieldName => {
  return value => {
    if (String(value).length === 0) {
      return fieldName + " is required";
    }
    return true;
  };
};

module.exports = plop => {
  plop.setGenerator("screen", {
    description: "Create a reusable screen",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your screen name?",
        validate: requireField("name")
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/screens/{{name}}/index.tsx",
        templateFile: "plop-templates/components/Component.tsx.hbs",
        skipIfExists: true
      },
      {
        type: "add",
        path: "src/screens/{{name}}/styles.scss",
        templateFile: "plop-templates/components/Component.styles.scss.hbs",
        skipIfExists: true
      }
    ]
  });

  plop.setGenerator("screenComponent", {
    description: "Create a reusable screen component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your screen component name?",
        validate: requireField("name")
      },
      {
        type: "input",
        name: "screen",
        message: "What is your screen name?",
        validate: requireField("screen")
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/screens/{{screen}}/components/{{name}}/index.tsx",
        templateFile: "plop-templates/components/Component.tsx.hbs",
        skipIfExists: true
      },
      {
        type: "add",
        path: "src/screens/{{screen}}/components/{{name}}/styles.scss",
        templateFile: "plop-templates/components/Component.styles.scss.hbs",
        skipIfExists: true
      }
    ]
  });

  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
        validate: requireField("name")
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/index.tsx",
        templateFile: "plop-templates/components/Component.tsx.hbs",
        skipIfExists: true
      },
      {
        type: "add",
        path: "src/components/{{name}}/styles.ts",
        templateFile: "plop-templates/components/Component.styles.scss.hbs",
        skipIfExists: true
      }
    ]
  });

  plop.setGenerator("saga", {
    description: "Create a reusable saga",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your saga name?",
        validate: requireField("name")
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/sagas/{{name}}.ts",
        templateFile: "plop-templates/sagas/Saga.ts.hbs",
        skipIfExists: true
      },
      {
        type: "add",
        path: "src/sagas/index.ts",
        templateFile: "plop-templates/sagas/index.ts.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "src/sagas/index.ts",
        pattern: `/* PLOP_INJECT_SAGAS_IMPORT */`,
        template: `import {{name}}Sagas from './{{name}}'`
      },
      {
        type: "append",
        path: "src/sagas/index.ts",
        pattern: `/* PLOP_INJECT_SAGAS_INDEX */`,
        template: `\t\t{{name}}Sagas(),`
      }
    ]
  });

  plop.setGenerator("reducer", {
    description: "Create a reusable reducer",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your reducer name?",
        validate: requireField("name")
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/reducers/{{name}}.ts",
        templateFile: "plop-templates/reducers/Reducer.ts.hbs",
        skipIfExists: true
      },
      {
        type: "add",
        path: "src/reducers/index.ts",
        templateFile: "plop-templates/reducers/index.ts.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "src/reducers/index.ts",
        pattern: `/* PLOP_INJECT_REDUCERS_IMPORT */`,
        template: `import {{name}} from './{{name}}'`
      },
      {
        type: "append",
        path: "src/reducers/index.ts",
        pattern: `/* PLOP_INJECT_REDUCERS_INDEX */`,
        template: `\t{{name}},`
      }
    ]
  });

  plop.setGenerator("service", {
    description: "Create a reusable service",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your service name?",
        validate: requireField("name")
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/services/{{name}}.ts",
        templateFile: "plop-templates/service/Service.ts.hbs",
        skipIfExists: true
      }
    ]
  });

  plop.setGenerator("selector", {
    description: "Create a reusable selector",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your selector name?",
        validate: requireField("name")
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/selectors/{{name}}.ts",
        templateFile: "plop-templates/selector/Selector.ts.hbs",
        skipIfExists: true
      }
    ]
  });
};
