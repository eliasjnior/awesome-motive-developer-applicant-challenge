<?php

namespace DeveloperApplicantChallenge\Interfaces;

use DeveloperApplicantChallenge\Interfaces;

interface Cache {
  public function getCache();

  public function clearCache();

  public function setCache($data);
}