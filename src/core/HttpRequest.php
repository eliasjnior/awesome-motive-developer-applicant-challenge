<?php

namespace DeveloperApplicantChallenge\Core;

use DeveloperApplicantChallenge\Interfaces\Request;

class HttpRequest implements Request {

  public function get($url) {
    $response = wp_remote_get($url);

    if(is_wp_error($response)) {
      return $response;
    }

    $body = wp_remote_retrieve_body($response);

    try {
      return json_decode($body);
    } catch(\Exception $e) {
      return new \WP_Error('internal_error', 'Internal error', array('status' => 500));
    }
  }

  public function isError($response) {
    return is_wp_error($response);
  }

}