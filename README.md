# Awesome Motive - Developer Applicant Challenge

This is the plugin solution for the [Awesome Motive Developer Applicant Challenge](https://awesomemotive.com/developer-applicant-challenge/).

## Initial setup

After running `docker-compose up`, you can run the initial setup script by running:

```bash
./initial-setup.sh
```

Or you can execute a script to install WordPress with the following information, or edit as you want:

* Admin username: `wordpress`
* Admin password: `wordpress`
* Admin email: `you@example.com`
* WordPress URL: `http://wordpress.localhost`
* WordPress title: `WordPress Demo`

```bash
docker compose run wordpress-cli wp core install --url=wordpress.localhost --title="WordPress Demo" --admin_name=wordpress --admin_password=wordpress --admin_email=you@example.co
```

Another recommended script is to setup permalinks:

```
docker compose run wordpress-cli wp rewrite structure '/%postname%/'
```