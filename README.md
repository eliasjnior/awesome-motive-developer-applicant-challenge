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

### Clear cache

To clear the transient cache that is used in the API:

```
docker compose run --rm wordpress-cli wp clear cache
```