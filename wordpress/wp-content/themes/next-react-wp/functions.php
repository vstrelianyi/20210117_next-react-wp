<?php
add_theme_support( 'custom-logo' );
add_theme_support( 'menus' );

function register_my_menus() {
  register_nav_menus(
    array(
      'header-menu' => __( 'Header Menu' ),
      'footer-menu' => __( 'Footer Menu' )
    )
  );
}
add_action( 'init', 'register_my_menus' );

add_theme_support( 'post-thumbnails' );

// ------------------------------------------------------------
// acf
// ------------------------------------------------------------
function register_acf_options_pages() {
	if( function_exists('acf_add_options_page') ) {

		$option_page = acf_add_options_page(array(
			'page_title' 	=> 'Options',
			'menu_title' 	=> 'Options',
			'menu_slug' 	=> 'options-acf',
			'capability' 	=> 'edit_posts',
			'redirect' 	=> false,
			'icon_url' => 'dashicons-layout',
			'show_in_graphql' => true,
		));
	}
}
add_action( 'acf/init', 'register_acf_options_pages' );