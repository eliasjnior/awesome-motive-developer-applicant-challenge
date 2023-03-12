<?php

defined('ABSPATH') || exit;

add_action( 'cli_init', function() {
  WP_CLI::add_command( 'clean cache', function () {
    delete_transient('miusage_data');
    WP_CLI::line( "The cache has been cleaned." );
  });
} );
