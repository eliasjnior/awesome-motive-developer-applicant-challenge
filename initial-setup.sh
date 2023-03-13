# Install WordPress
docker compose run --rm wordpress-cli wp core install --url=wordpress.localhost --title="WordPress Demo" --admin_name=wordpress --admin_password=wordpress --admin_email=you@example.com

# Setup permalinks
docker compose run --rm wordpress-cli wp rewrite structure '/%postname%/'

# Activate plugin
docker compose run --rm wordpress-cli wp plugin activate developer-applicant-challenge

# Delete plugins
docker compose run --rm wordpress-cli wp plugin delete akismet hello

# Install dependencies
composer install

# Build assets
yarn build