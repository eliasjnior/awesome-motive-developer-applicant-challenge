<?php

namespace DeveloperApplicantChallenge\Core;

use DeveloperApplicantChallenge\Interfaces\Cache;
use DeveloperApplicantChallenge\Interfaces\Cli;

class WPCli implements Cli {

  private Cache $cache;

  public function __construct(Cache $cache) {
    $this->cache = $cache;

    $this->registerCommands();
  }

  public function registerCommands() {
    \WP_CLI::add_command( 'clear cache', array($this, 'clearCache'));
  }

  public function clearCache() {
    $this->cache->clearCache();

    \WP_CLI::line( "The cache has been cleaned." );
  }

}