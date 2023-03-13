<?php

namespace DeveloperApplicantChallenge\Core;

use DeveloperApplicantChallenge\Interfaces\Api;
use DeveloperApplicantChallenge\Interfaces\Cache;
use DeveloperApplicantChallenge\Interfaces\Request;

class RestApi implements Api {

  private Cache $cache;
  private Request $request;
  private string $endpointPrefix;

  public function __construct(
    Request $request,
    Cache $cache,
    string $endpointPrefix
  ) {    
    $this->request = $request;
    $this->cache = $cache;
    $this->endpointPrefix = $endpointPrefix;

    add_action( 'rest_api_init', array($this, 'registerRoutes') );
  }

  public function registerRoutes() {
    register_rest_route( $this->endpointPrefix, '/table', array(
      'methods' => 'GET',
      'callback' => array($this, 'getMiusageData'),
    ) );
  }

  public function getMiusageData() {
    $data = $this->cache->getCache();
  
    if($data) {
      return $data;
    }

    $response = $this->request->get('https://miusage.com/v1/challenge/1/');
  
    if($this->request->isError($response)) {
      return new \WP_Error('internal_error', 'Internal error', array('status' => 500));
    }
  
    try {
      $this->cache->setCache($response);
  
      return $response;
    } catch(\Exception $e) {
      return new \WP_Error('internal_error', 'Internal error', array('status' => 500));
    }
  }
}