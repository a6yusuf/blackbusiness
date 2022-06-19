<?php
/**
 * Plugin Name:       Greenbook API
 * Description:       Greenbook API for recommending and listing Black businesses.
 * Version:           1.0.1
 * Author:            GreenBook Team
 */

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/**
* Define Plugins Contants
*/
define ( 'WPRK_PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define ( 'WPRK_URL', trailingslashit( plugins_url( '/', __FILE__ ) ) );

class BlackBusiness {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }
//load widget backend
  function onInit() {
    wp_register_script('makeUpANameHereScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('makeUpANameHereStyle', plugin_dir_url(__FILE__) . 'build/index.css');
    
    register_block_type('makeupnamespace/make-up-block-name', array(
      'render_callback' => array($this, 'renderCallback'),
      'editor_script' => 'makeUpANameHereScript',
      'editor_style' => 'makeUpANameHereStyle'
    ));

    //load admin menu page
    add_action( 'admin_enqueue_scripts', 'load_scripts' );

    function load_scripts() {
        wp_enqueue_script( 'wp-react-kickoff', WPRK_URL . 'build/admin.js', [ 'wp-blocks', 'wp-element' ], wp_rand(), true );
        wp_enqueue_style( 'wp-react-kickoff', WPRK_URL . 'build/index.css');
        wp_localize_script( 'wp-react-kickoff', 'appLocalizer', [
            'apiUrl' => home_url( '/wp-json' ),
            'nonce' => wp_create_nonce( 'wp_rest' ),
        ] );
    }
  }

//load widget frontend
  function renderCallback($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('boilerplateFrontendScript', WPRK_URL . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('boilerplateFrontendStyles', WPRK_URL . 'build/frontend.css');
      wp_localize_script( 'boilerplateFrontendScript', 'appLocalizer', [
        'apiUrl' => home_url( '/wp-json' ),
        'nonce' => wp_create_nonce( 'wp_rest' ),
    ] );
    }

    ob_start(); ?>
    <div class="boilerplate-update-me"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
    
  }

  function renderCallbackBasic($attributes) {
    return '<div class="boilerplate-frontend">Hello, the sky is ' . $attributes['username'] . ' and the grass is ' . $attributes['password'] . '.</div>';
  }
}

$blackBusiness = new BlackBusiness();

require_once WPRK_PATH . 'classes/class-create-admin-menu.php';
require_once WPRK_PATH . 'classes/class-create-settings-routes.php';