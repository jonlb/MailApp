var handlebars = require('handlebars'),
    layouts = require('handlebars-layouts'),
    forms = require('handlebars-form-helpers'),
    fs = require('fs');
    
forms.register(handlebars);

handlebars.registerHelper(layouts(handlebars));

handlebars.registerPartial('layout', fs.readFileSync('views/layouts/layout.hbs', 'utf8'));