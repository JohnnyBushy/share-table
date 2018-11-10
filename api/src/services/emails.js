import Email from 'email-templates';
import path from 'path';

const PATH_TO_TABLE_EMAIL_TEMPLATE = path.join(
  __dirname,
  '..',
  'emails',
  'table'
);

const email = new Email({
  message: {
    from: 'no-reply@sharetable.io'
  },
  send: true,
  transport: {
    host: 'smtp',
    port: 1025
  },
  views: {
    options: {
      extension: 'hbs',
      map: {
        hbs: 'handlebars'
      }
    }
  }
});

export default {
  async sendTableByEmail(table, recipients) {
    return await email.send({
      template: PATH_TO_TABLE_EMAIL_TEMPLATE,
      message: {
        to: recipients || 'inbox@sharetable.io'
      },
      locals: {
        name: table.title,
        rows: table.rows
      }
    });
  }
};
