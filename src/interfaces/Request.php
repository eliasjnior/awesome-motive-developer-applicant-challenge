<?php

namespace DeveloperApplicantChallenge\Interfaces;

interface Request {
  public function get($url);
  public function isError($response);
}