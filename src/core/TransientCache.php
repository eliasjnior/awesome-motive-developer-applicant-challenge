<?php

namespace DeveloperApplicantChallenge\Core;

use DeveloperApplicantChallenge\Interfaces\Cache;

class TransientCache implements Cache {
  private $cacheDuration;

  public function __construct(
    int $cacheDuration
  ) {
    $this->cacheDuration = $cacheDuration;
  }
  
  public function getCache() {
    return get_transient('miusage_data');
  }

  public function clearCache() {
    delete_transient('miusage_data');
  }

  public function setCache($data) {
    set_transient('miusage_data', $data, $this->cacheDuration);
  }
}