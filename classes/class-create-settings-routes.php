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
        register_rest_route( 'wprk/v1', '/user', [
            'methods' => 'GET',
            'callback' => [ $this, 'get_user' ],
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
        register_rest_route( 'wprk/v1', '/user', [
            'methods' => 'POST',
            'callback' => [ $this, 'create_user' ],
            'permission_callback' => [ $this, 'get_settings_permission' ]
        ] );
        register_rest_route( 'wprk/v1', '/business', [
            'methods' => 'POST',
            'callback' => [ $this, 'recommend_biz' ],
            'permission_callback' => [ $this, 'get_settings_permission' ]
        ] );
        register_rest_route( 'wprk/v1', '/locbusiness', [
            'methods' => 'POST',
            'callback' => [ $this, 'loc_business' ],
            'permission_callback' => [ $this, 'get_settings_permission' ]
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
            'distance'  => $distance,
        );

        $args = array(
            'body'  => $body,
            'headers' => array(
                'Authorization' => 'Bearer ' . $token
            )
        );
        // $url = 'https://v1.greenbookapi.com/v1/business/nearby';
        $url = 'https://global-green-book-api-dev-kjjy8.ondigitalocean.app/v1/business/nearby';
        $response = wp_remote_get( $url, $args );
        $res  = wp_remote_retrieve_body( $response );

        return rest_ensure_response( json_decode($res) );
    }

    public function loc_business($req) {
        $longitude  = $req['lng'];
        $latitude  = $req['lat'];
        $googleApiKey = $req['apiKey'];
        $distance  = get_option( 'greenbook_settings_distance' ) || 10;
        $token = get_option( 'greenbook_settings_token');
        $token_type = get_option( 'greenbook_settings_token_type');

        $body = array(
            'latitude' => $latitude,
            'longitude' => $longitude,
            'distance'  => $distance,
        );

        $args = array(
            'body'  => $body,
            'headers' => array(
                'Authorization' => 'Bearer ' . $token
            )
        );
        $url = 'https://global-green-book-api-dev-kjjy8.ondigitalocean.app/v1/business/nearby';
        $response = wp_remote_get( $url, $args );
        $res  = wp_remote_retrieve_body( $response );

        return rest_ensure_response( json_decode($res) );
    }

    public function get_settings_permission() {
        return true;
    }

    public function recommend_biz( $req ) {
        $business_name = sanitize_text_field( $req['business_name'] );
        $tags  = sanitize_text_field( $req['tags'] );
        $email  = sanitize_text_field( $req['email'] );
        $phone  = sanitize_text_field( $req['phone'] );
        $country  = sanitize_text_field( $req['country'] );
        $state  = sanitize_text_field( $req['state'] );
        $zip_code  = sanitize_text_field( $req['zip_code'] );
        $city  = sanitize_text_field( $req['city'] );
        $street_address  = sanitize_text_field( $req['street_address'] );
        $userEmail  = sanitize_text_field( $req['userEmail'] );
        $userPsw  = sanitize_text_field( $req['userPsw'] );

        // $token = get_option( 'greenbook_settings_token');

        $body = array(
            'username' => $userEmail,
            'password' => $userPsw
        );

        $args = array(
            'body'  => $body,
        );
        $url = 'https://global-green-book-api-dev-kjjy8.ondigitalocean.app/v1/oauth/token';
        $response = wp_remote_post( $url, $args );
        $res  = wp_remote_retrieve_body( $response );

        $data = json_decode($res, true);

        if($data['access_token']){

            $token = $data['access_token'];

            $body = json_encode(array(
                'business_name' => $business_name,
                'email' => $email,
                'phone' => $phone,
                'country' => $country,
                'tags' => array($tags),
                'state' => $state,
                'zip_code' => $zip_code,
                'city'      => $city,
                'street_address' => $street_address,
            ));

            $args = array(
                'body'  => $body,
                'headers' => array(
                    'Authorization' => 'Bearer ' . $token,
                    'Content-Type' => 'application/json'
                )
            );
            $url = 'https://global-green-book-api-dev-kjjy8.ondigitalocean.app/v1/business/recommend';
            $response = wp_remote_post( $url, $args );
            $res  = wp_remote_retrieve_body( $response );
            $res_code  = wp_remote_retrieve_response_code( $response );

            $data = json_decode($res, true);
            return ['data' => $data, 'status' => $res_code, 'token' => $token];
        }
    }
    public function create_user( $req ) {
        // $username = sanitize_text_field( $req['username'] );
        $password  = sanitize_text_field( $req['password'] );
        $email  = sanitize_text_field( $req['email'] );
        $first_name  = sanitize_text_field( $req['first_name'] );
        $last_name  = sanitize_text_field( $req['last_name'] );
        $mobile_phone  = sanitize_text_field( $req['mobile_phone'] );
        $country  = sanitize_text_field( $req['country'] );
        $state  = sanitize_text_field( $req['state'] );
        $zip_code  = sanitize_text_field( $req['zip_code'] );
        $city  = sanitize_text_field( $req['city'] );
        $street_address  = sanitize_text_field( $req['street_address'] );

        $body = json_encode(array(
            'username' => $email,
            'password' => $password,
            'email' => $email,
            'password' => $password,
            'first_name' => $first_name,
            'last_name' => $last_name,
            'country' => $country,
            'mobile_phone' => $mobile_phone,
            'state' => $state,
            'zip_code' => $zip_code,
            'city'      => $city,
            'street_address' => $street_address,
            "mobile_opt_in" => true,
            "email_opt_in" => true
        ));

        $args = array(
            'body'  => $body,
            'headers' => array(
                'Content-Type' => 'application/json'
            )
        );
        $url = 'https://global-green-book-api-dev-kjjy8.ondigitalocean.app/v1/user/create';
        $response = wp_remote_post( $url, $args );
        $res  = wp_remote_retrieve_body( $response );
        $res_code  = wp_remote_retrieve_response_code( $response );


        $data = json_decode($res, true);
        return ['data' => $data, 'status' => $res_code];
        // return rest_ensure_response( $data );

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
        $url = 'https://global-green-book-api-dev-kjjy8.ondigitalocean.app/v1/oauth/token';
        // $url = 'https://global-green-book-api-dev-kjjy8.ondigitalocean.app/v1/user/create';
        // $url = 'https://v1.greenbookapi.com/v1/oauth/token';
        $response = wp_remote_post( $url, $args );
        $res  = wp_remote_retrieve_body( $response );

        $data = json_decode($res, true);
        // return $data;
        if($data['access_token']){
            $token = $data['access_token'];
            $token_type = $data['token_type'];
            $refresh_token = $data['refresh_token'];
    
            update_option( 'greenbook_settings_username', $username );
            update_option( 'greenbook_settings_password', $password );
            update_option( 'greenbook_settings_token', $token );
            update_option( 'greenbook_settings_refresh_token', $refresh_token );
            update_option( 'greenbook_settings_token_type', $token_type );
            return rest_ensure_response( $data );
        }
        return rest_ensure_response( 'failed' );

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
        $url = 'https://global-green-book-api-dev-kjjy8.ondigitalocean.app/ping';
        // $url = 'https://v1.greenbookapi.com/ping';
        $response = wp_remote_get($url);
        $body     = wp_remote_retrieve_body( $response );
        return rest_ensure_response($body);
    }

    public function get_user() {
        $current_user = get_current_user_id();
        // $user = $current_user;
        return rest_ensure_response($current_user);
    }

    public function save_settings_permission() {
        // return current_user_can( 'publish_posts' );
        return true;
    }

}
new WP_React_Settings_Rest_Route();