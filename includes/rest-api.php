<?php 

defined('ABSPATH') || exit;

function get_miusage_data() {
  $data = get_transient('miusage_data');

  if($data) {
    return $data;
  }

  $response = wp_remote_get('https://miusage.com/v1/challenge/1/');

  if(is_wp_error($response)) {
    return new WP_Error('internal_error', 'Internal error', array('status' => 500));
  }

  try {
    $data = json_decode(wp_remote_retrieve_body($response), true);

    set_transient('miusage_data', $data, 60 * 60);

    return $data;
  } catch(Exception $e) {
    return new WP_Error('internal_error', 'Internal error', array('status' => 500));
  }
}

add_action( 'rest_api_init', function () {
  register_rest_route( 'developer-applicant-challenge/v1', '/table', array(
    'methods' => 'GET',
    'callback' => 'get_miusage_data',
  ) );
} );