<?php 
/**
 * Plugin Name: Awesome Motive - Developer Applicant Challenge
 * Author: Elias Júnior
 */
defined('ABSPATH') || exit;

define('ADC_PLUGIN_PATH', dirname(__FILE__));
define('ADC_TEXTDOMAIN', 'adc');


include ADC_PLUGIN_PATH . '/includes/rest-api.php';
include ADC_PLUGIN_PATH . '/includes/cli.php';
include ADC_PLUGIN_PATH . '/includes/admin-view.php';
