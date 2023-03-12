<?php 

defined('ABSPATH') || exit;

function dac_admin_page() {
  include ADC_PLUGIN_PATH . '/views/admin-page.php';
}

add_action( 'admin_menu', function() {
	add_submenu_page(
    'options-general.php',
		'Developer Applicant Challenge',
		'Developer Applicant Challenge',
		'manage_options',
		'developer-applicant-challenge-admin-page',
		'dac_admin_page'
	);
} );