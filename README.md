# Share Table

Small application to create, edit, save and send tables by emails.

![Screenshot of web interface](/share-table-app-preview.png "ShareTable web interface")

## Requirements

You will need the following things properly installed on your computer.

* [Docker](https://docs.docker.com/install/)
* [Docker Compose](https://docs.docker.com/compose/install/)

## File Structure

* `/api` - node.js based service 
* `/db-migration` - migrations for db schema for postgres
* `/postgres` - temp folder for storing postgres data
  * It isn't used for development purposes
* `/web` - Ember.js based application

## Running for development

* `docker-compose up -d app-dev`
  * this will pull and run all the required docker images
  * for watching logs user `docker-compose logs -f`
* App will be accessible at [http://localhost](http://localhost)
* Mailbox app is accessible at [http://localhost:8025](http://localhost:8025)
  * This application doesn't send emails to real recipients. Instead it uses the `mailhog` smtp service for development purposes only. If you need to send real emails, change smtp service settings.


## Running for production

(!) No configuration is ready for this yet.
