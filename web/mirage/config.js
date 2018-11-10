export default function() {
  this.namespace = '/api';
  this.timing = 400;

  this.post('/tables');
  this.put('/tables/:id');

  this.post(
    '/emails',
    (schema, { requestBody }) => {
      const { email } = JSON.parse(requestBody);

      email.id = Date.now();
      email.table = email.table.id;

      return {
        email
      };
    },
    201
  );
}
