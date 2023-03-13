<?php

namespace DeveloperApplicantChallenge\Core;

use DeveloperApplicantChallenge\Interfaces\Blocks;

class GutenbergBlocks implements Blocks {

  public function __construct() {
    add_action('init', array($this, 'registerBlocks'));
  }

  public function registerBlocks() {
    if ( ! function_exists( 'register_block_type' ) ) {
      return;
    }

    register_block_type( ADC_PLUGIN_PATH . '/dist/blocks/table-block' );
  }
  
}