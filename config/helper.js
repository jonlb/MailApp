var handlebars = require('sails/node_modules/express-handlebars/node_modules/handlebars'),
    layouts = require('handlebars-layouts'),
    forms = require('handlebars-form-helpers'),
    fs = require('fs');
    
forms.register(handlebars);
layouts.register(handlebars);

handlebars.registerPartial('layout', fs.readFileSync('views/layouts/layout.hbs', 'utf8'));