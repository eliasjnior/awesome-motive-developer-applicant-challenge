<?php

namespace DeveloperApplicantChallenge\Bootstrap;

use DeveloperApplicantChallenge\Interfaces\Api;
use DeveloperApplicantChallenge\Interfaces\Cache;
use DeveloperApplicantChallenge\Interfaces\Request;
use DeveloperApplicantChallenge\Interfaces\Cli;

use DeveloperApplicantChallenge\Core\AdminPage;
use DeveloperApplicantChallenge\Core\GutenbergBlocks;
use DeveloperApplicantChallenge\Core\TransientCache;
use DeveloperApplicantChallenge\Core\HttpRequest;
use DeveloperApplicantChallenge\Core\RestApi;
use DeveloperApplicantChallenge\Core\WPCli;

class Initialize {

  private Cache $cache;
  private Request $request;
  private string $endpointPrefix;
  private int $cacheDuration;
  private Api $api;
  private Cli $cli;

  public function __construct() {
    $this->cacheDuration = 60 * 60;
    $this->cache = new TransientCache($this->cacheDuration);
    $this->request = new HttpRequest();
    $this->endpointPrefix = 'developer-applicant-challenge/v1';
    $this->api = new RestApi(
      $this->request,
      $this->cache,
      $this->endpointPrefix
    );

    new AdminPage('developer-applicant-challenge-admin-page');
    new GutenbergBlocks();

    add_action( 'cli_init', function() {
      new WPCli($this->cache);
    } );
  }

}