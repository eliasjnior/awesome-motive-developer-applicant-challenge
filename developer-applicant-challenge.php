<?php 
/**
 * Plugin Name: Awesome Motive - Developer Applicant Challenge
 * Author: Elias Júnior
 */
defined('ABSPATH') || exit;

define('ADC_PLUGIN_PATH', dirname(__FILE__));
define('ADC_TEXTDOMAIN', 'developer-applicant-challenge');

require ADC_PLUGIN_PATH . '/vendor/autoload.php';

new \DeveloperApplicantChallenge\Bootstrap\Initialize();

