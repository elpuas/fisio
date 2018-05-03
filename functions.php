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
   wp_enqueue_style( 'fisio-google-fonts', 'https://fonts.googleapis.com/css?family=Roboto+Slab:700 ' );
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
 /**
 * Hook into Footer and change credits
 */
 if ( ! function_exists( 'storefront_credit' ) ) {
   //Function goes here
   function storefront_credit() {
    $fisio = 'Hecho en Costa Rica Por';
    $myBrand = 'el.puas';
    $site_title = get_bloginfo( 'name' );
    echo '<div class="site-info"><p> &copy; '.  date('Y') . ' ' . $site_title . ' | ' . $fisio . ' ' . '<a href="https://elpuas.com" target="_blank">' . $myBrand . '</a></p></div>';
   }
 }
 do_action( 'storefront_footer');


 /**
 * Hook into Header and reorder items
*/
add_action( 'init' , 'add_and_remove' , 15 );
function add_and_remove() {
        remove_action( 'storefront_header', 'storefront_primary_navigation', 50 );
        add_action( 'storefront_header', 'storefront_primary_navigation', 20 );
        remove_action( 'storefront_header', 'storefront_product_search', 40 );
        remove_action( 'storefront_header', 'storefront_header_cart', 60 );
        add_action( 'storefront_header', 'storefront_header_cart', 20 );
}
/**
* Add WP Icons to the Front End
*/
add_action( 'wp_enqueue_scripts', 'load_dashicons_front_end' );
function load_dashicons_front_end() {
  wp_enqueue_style( 'dashicons' );
}

/**
* Change Menu toogle text
*/
add_filter( 'storefront_menu_toggle_text', 'fisio_storefront_menu_toggle_text' );
function fisio_storefront_menu_toggle_text( $text ) {
	$text = __( null );
	return $text;
}

// Hide Admin Items

add_action('admin_head', 'mdo_adminizer');

function mdo_adminizer(){
  global $current_user;
  get_currentuserinfo();

  if ( $current_user->user_email !== "elpuas@gmail.com" ) {
    echo '<style>
            #toplevel_page_vc-general, #menu-plugins, #menu-appearance,
            li#menu-dashboard ul.wp-submenu  {
              display: none;
            }
          </style>';
          }
    }

/**
* Hook into Footer and echo Contact Form
*  // Insert text below the Featured Products title
*  function add_contact_form_shortcode() {
*  	// Echo out content
*  	echo '<div class="fisio__contact-form col-full">' . do_shortcode( '[contact-form-7 id="75" title="fisio"]', 'storefront' ) . '</div>';
*  }
*  add_action( 'storefront_before_footer' , 'add_contact_form_shortcode' );
*/
