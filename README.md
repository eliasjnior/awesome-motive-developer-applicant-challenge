# Awesome Motive - Developer Applicant Challenge

This is the plugin solution for the [Awesome Motive Developer Applicant Challenge](https://awesomemotive.com/developer-applicant-challenge/).

## Start the project

The following command will start the Docker for the project and check on [http://wordpress.localhost](http://wordpress.localhost) to the page be available:

```bash
docker compose up
```

## Initial setup

After start the project, run the initial setup script by executing:

```bash
./initial-setup.sh
```

This will install WordPress with the following information:

* Admin username: `wordpress`
* Admin password: `wordpress`
* Admin email: `you@example.com`
* WordPress URL: `http://wordpress.localhost`
* WordPress title: `WordPress Demo`

## CLI Commands

The WP CLI commands available are:

## Rest API

To retrieve the table data you can use the following URL:

* [/wp-json/developer-applicant-challenge/v1/table](http://wordpress.localhost/wp-json/developer-applicant-challenge/v1/table)

### Clear cache

To clear the transient cache that is used in the API:

```
docker compose run --rm wordpress-cli wp clear cache
```

## Plugin features

- [x]  Using the GET HTTP Method accessible endpoint https://miusage.com/v1/challenge/1/ (there are no parameters to/from required), create an AJAX endpoint in WordPress that calls the above listed API endpoint to get the data return. Your AJAX endpoint should be usable whether the user is logged in or not (authentication of the AJAX endpoint is not required). The endpoint should always return the data when called, but regardless of when/how many times your AJAX endpoint is called, it should never request the data from our miusage.com endpoint more than 1 time per hour.
- [x]  Create a custom (Gutenberg) block, that when loaded uses Javascript to contact your AJAX endpoint and display the data returned formatted into a table-like display. The block should have custom controls in the block settings to toggle the visibility of the table columns.
- [x]  Create a WP CLI command that can be used to force the refresh (override the 1 time per hour limit described above) of this data the next time the AJAX endpoint is called
- [x]  Create a WordPress admin page which displays this data in the style of the admin page of the WordPress plugin [WP Mail SMTP](https://wordpress.org/plugins/wp-mail-smtp/) and add a button to refresh the data.