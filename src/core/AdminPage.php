<?php

namespace DeveloperApplicantChallenge\Core;

class AdminPage {

  private string $pageSlug;

  public function __construct(
    string $pageSlug
  ) {
    $this->pageSlug = $pageSlug;

    add_action( 'admin_menu', array($this, 'registerMenus'));
    add_action( 'admin_enqueue_scripts', array($this, 'enqueueAdminScripts' ) );
  }

  public function registerMenus() {
    add_submenu_page(
      'options-general.php',
      __('Developer Applicant Challenge', ADC_TEXTDOMAIN),
      __('Developer Applicant Challenge', ADC_TEXTDOMAIN),
      'manage_options',
      $this->pageSlug,
      array($this, 'pageContent')
    );
  }

  public function pageContent() {
    include ADC_PLUGIN_PATH . '/src/views/admin-page.php';
  }

  public function enqueueAdminScripts( $hook ) {
    if( ! 'developer-applicant-challenge-admin-page ' === $hook ) {
      return;
    }

    wp_enqueue_script( 'adc-admin-script', plugin_dir_url(ADC_PLUGIN_FILE_PATH) . 'dist/ui/main.umd.js', array(), '1.0.0', true );
  }
}