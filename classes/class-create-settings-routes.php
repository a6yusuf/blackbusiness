<?php
/**
 * This file will create Custom Rest API End Points.
 */
class WP_React_Settings_Rest_Route {

    public function __construct() {
        add_action( 'rest_api_init', [ $this, 'create_rest_routes' ] );
    }

    public function create_rest_routes() {
        register_rest_route( 'wprk/v1', '/settings', [
            'methods' => 'GET',
            'callback' => [ $this, 'get_settings' ],
            'permission_callback' => [ $this, 'get_settings_permission' ]
        ] );
        register_rest_route( 'wprk/v1', '/ping', [
            'methods' => 'GET',
            'callback' => [ $this, 'ping_api' ],
            'permission_callback' => [ $this, 'get_settings_permission' ]
        ] );
        register_rest_route( 'wprk/v1', '/business', [
            'methods' => 'GET',
            'callback' => [ $this, 'get_business' ],
            'permission_callback' => [ $this, 'get_settings_permission' ]
        ] );
        register_rest_route( 'wprk/v1', '/settings', [
            'methods' => 'POST',
            'callback' => [ $this, 'save_settings' ],
            'permission_callback' => [ $this, 'save_settings_permission' ]
        ] );
        register_rest_route( 'wprk/v1', '/location', [
            'methods' => 'POST',
            'callback' => [ $this, 'save_location' ],
            'permission_callback' => [ $this, 'save_settings_permission' ]
        ] );
    }

    public function get_settings() {
        $username = get_option( 'greenbook_settings_username' );
        $password  = get_option( 'greenbook_settings_password' );
        $token = get_option( 'greenbook_settings_token');
        $token_type = get_option( 'greenbook_settings_token_type');

        $response = [
            'username' => $username,
            'password'  => $password,
            'token' => $token,
            'token_type'    => $token_type
        ];

        return rest_ensure_response( $response );
    }

    public function get_business() {
        $googleApiKey = get_option( 'greenbook_settings_googleApiKey' );
        $longitude  = get_option( 'greenbook_settings_longitude' );
        $latitude  = get_option( 'greenbook_settings_latitude' );
        $distance  = get_option( 'greenbook_settings_distance' );
        $token = get_option( 'greenbook_settings_token');
        $token_type = get_option( 'greenbook_settings_token_type');

        $body = array(
            'latitude' => $latitude,
            'longitude' => $longitude,
            'distance'  => $distance
        );

        $args = array(
            'body'  => $body,
            'headers' => array(
                'Authorization' => 'Bearer ' . $token
            )
        );
        $url = 'https://v1.greenbookapi.com/v1/business/nearby';
        $response = wp_remote_get( $url, $args );
        $res  = wp_remote_retrieve_body( $response );

        return rest_ensure_response( json_decode($res) );
    }

    public function get_settings_permission() {
        return true;
    }

    public function save_settings( $req ) {
        $username = sanitize_text_field( $req['username'] );
        $password  = sanitize_text_field( $req['password'] );

        $body = array(
            'username' => $username,
            'password' => $password
        );

        $args = array(
            'body'  => $body,
        );
        $url = 'https://v1.greenbookapi.com/v1/oauth/token';
        $response = wp_remote_post( $url, $args );
        $res  = wp_remote_retrieve_body( $response );

        $data = json_decode($res);
        // return $data;
        if(!array_key_exists('detail', $data)){
            $token = $data['access_token'];
            $token_type = $data['token_type'];
    
            update_option( 'greenbook_settings_username', $username );
            update_option( 'greenbook_settings_password', $password );
            update_option( 'greenbook_settings_token', $token );
            update_option( 'greenbook_settings_token_type', $token_type );
        }
        return rest_ensure_response( $data );

    }

    public function save_location( $req ) {
        $longitude = sanitize_text_field( $req['longitude'] );
        $latitude  = sanitize_text_field( $req['latitude'] );
        $distance  = sanitize_text_field( $req['distance'] );
        $googleApiKey  = sanitize_text_field( $req['googleApiKey'] );
    
        update_option( 'greenbook_settings_longitude', $longitude );
        update_option( 'greenbook_settings_latitude', $latitude );
        update_option( 'greenbook_settings_distance', $distance );
        update_option( 'greenbook_settings_googleApiKey', $googleApiKey );
        
        return rest_ensure_response( 'success' );
    }

    public function ping_api() {
        $url = 'https://v1.greenbookapi.com/ping';
        $response = wp_remote_get($url);
        $body     = wp_remote_retrieve_body( $response );
        return rest_ensure_response($body);
    }

    public function save_settings_permission() {
        // return current_user_can( 'publish_posts' );
        return true;
    }

}
new WP_React_Settings_Rest_Route();