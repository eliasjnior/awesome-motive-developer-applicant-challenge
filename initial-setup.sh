# Install WordPress
docker compose run wordpress-cli wp core install --url=wordpress.localhost --title="WordPress Demo" --admin_name=wordpress --admin_password=wordpress --admin_email=you@example.com

# Setup permalinks
docker compose run wordpress-cli wp rewrite structure '/%postname%/'
