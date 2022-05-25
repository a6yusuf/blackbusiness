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
        register_rest_route( 'wprk/v1', '/settings', [
            'methods' => 'POST',
            'callback' => [ $this, 'save_settings' ],
            'permission_callback' => [ $this, 'save_settings_permission' ]
        ] );
    }

    public function get_settings() {
        // $firstname = get_option( 'wprk_settings_firstname' );
        // $lastname  = get_option( 'wprk_settings_lastname' );
        // $email     = get_option( 'wprk_settings_email' );
        // $response = [
        //     'firstname' => $firstname,
        //     'lastname'  => $lastname,
        //     'email'     => $email
        // ];

        // return rest_ensure_response( $response );
        return rest_ensure_response( "Hello success" );
    }

    public function get_settings_permission() {
        return true;
    }

    public function save_settings( $req ) {
        $id = sanitize_text_field( $req['id'] );
        $amount  = sanitize_text_field( $req['amount'] );
        $merchantId = sanitize_text_field( $req['merchantId'] );
        $password = sanitize_text_field( $req['password'] );
        $redirectUrl = sanitize_text_field( $req['redirectUrl'] );

        $post_data = '{ 
            "apiOperation": "CREATE_CHECKOUT_SESSION", 
            "interaction": {
                "operation": "PURCHASE",
                "returnUrl": "' . $redirectUrl .'",
                "cancelUrl": "' . $redirectUrl . '",
            },
            "order": {
                "currency": "USD",
                 "id": "' . $id . '",
                "amount": "' . $amount . '"
              } 
          }';

        $url = "https://fbn.gateway.mastercard.com/api/rest/version/61/merchant/" . $merchantId . "/session";
        
        $auth = 'merchant.'. $merchantId . ':' . $password;
        $credentials = base64_encode($auth);
        $authorization = 'Authorization: Basic ' . $credentials;

        // Prepare new cURL resource
        $crl = curl_init($url);
        curl_setopt($crl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($crl, CURLINFO_HEADER_OUT, true);
        curl_setopt($crl, CURLOPT_POST, true);
        curl_setopt($crl, CURLOPT_POSTFIELDS, $post_data);
         
        // Set HTTP Header for POST request 
        curl_setopt($crl, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Authorization: Basic ' . $credentials)
        );
         
        // Submit the POST request
        $result = curl_exec($crl);
         
        // handle curl error
        if ($result === false) {
            // throw new Exception('Curl error: ' . curl_error($crl));
            //print_r('Curl error: ' . curl_error($crl));
            $result_noti = 0; die();
        } else {
            return rest_ensure_response( $result );
        }
        // Close cURL session handle
        curl_close($crl);

    }

    public function save_settings_permission() {
        // return current_user_can( 'publish_posts' );
        return true;
    }
}
new WP_React_Settings_Rest_Route();