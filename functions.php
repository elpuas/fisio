<?php
/**
 * fisio child theme functions.php file.
 * @package fisio
 */

 /*
 Your child theme's stylesheet will usually be loaded automatically.
 If it is not, you will need to enqueue it as well. Setting 'parent-style' as a
 dependency will ensure that the child theme stylesheet loads after it.
  */

 function fisio_scripts() {
   wp_enqueue_style( 'hs-google-fonts', 'https://fonts.googleapis.com/css?family=Fira+Mono:400|Open+Sans+Condensed:700|Roboto+Condensed' );
   wp_enqueue_style( 'fisio-custom-css', get_stylesheet_directory_uri() . '/fisio-custom.css', array() );
 	 wp_enqueue_script( 'fisio-custom-js', get_stylesheet_directory_uri() . '/fisio-custom.js', array(), get_the_time(), true );
 }
 add_action( 'wp_enqueue_scripts', 'fisio_scripts', 999 );

 /**
  * Dequeue the Storefront Parent theme core CSS
  */
function sf_child_theme_dequeue_style() {
     wp_dequeue_style( 'storefront-style' );
     wp_dequeue_style( 'storefront-woocommerce-style' );
 }


 if ( ! function_exists( 'storefront_credit' ) ) {
   //Function goes here
   function storefront_credit() {
    $fisio = 'Hecho en Costa Rica Por';
    $myBrand = 'el.puas';
    $site_title = get_bloginfo( 'name' );
    echo '<div class="site-info"><p> &copy; '.  date('Y') . ' ' . $site_title . ' ' . $fisio . ' ' . '<a href="https://elpuas.com" target="_blank">' . $myBrand . '</a></p></div>';
   }
 }
 do_action( 'storefront_footer');

/**
* Hook into Footer and echo Contact Form
*  // Insert text below the Featured Products title
*  function add_contact_form_shortcode() {
*  	// Echo out content
*  	echo '<div class="fisio__contact-form col-full">' . do_shortcode( '[contact-form-7 id="75" title="fisio"]', 'storefront' ) . '</div>';
*  }
*  add_action( 'storefront_before_footer' , 'add_contact_form_shortcode' );
*/
