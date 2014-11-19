<?php
/**
 * Functions for perfil change password
 * @param unknown $form
 * @param unknown $form_state
 * @return multitype:string number boolean NULL
 */

function change_password_m($form, &$form_state){
	global $user;

    if (!user_is_logged_in()) {
        drupal_access_denied();
    }

    module_load_include('inc', 'user', 'user.pages');
    $form = drupal_get_form('user_profile_form', $user);
    $request_new = l(t('Request new password'), 'user/password', array('attributes' => array('title' => t('Request new password via e-mail.'))));
    $current_pass_description = t('Enter your current password to change the %pass. !request_new.', array('%pass' => t('Password'), '!request_new' => $request_new));
    $form['account']['current_pass']['#description'] = $current_pass_description;
    $form['account']['name']['#access'] = 0;
    $form['account']['mail']['#access'] = 0;
    $form['account']['status']['#access'] = 0;
    $form['account']['roles']['#access'] = 0;
    $form['field_nombre_s_']['#access'] = 0;
    $form['field_lugar_de_trabajo']['#access'] = 0;
    $form['field_user_ubicaci_n']['#access'] = 0;
    $form['field_caracter_institucion']['#access'] = 0;
    $form['field_zona_institucion']['#access'] = 0;
    $form['field_has_participado']['#access'] = 0;
    $form['field_terminos']['#access'] = 0;
    $form['field_fecha_de_nacimiento']['#access'] = 0;
    $form['picture']['#access'] = 0;
    $form['timezone']['#access'] = 0;
    $form['field_n_mero_identificaci_n']['#access'] = 0;
    $form['field_tipo_identificaci_n']['#access'] = 0;
    $form['field_apellidos']['#access'] = 0;
    $form['field_tel_fono_contacto']['#access'] = 0;
    $form['field_cargo']['#access'] = 0;
    $form['field_ocupaci_n']['#access'] = 0;
    return $form;
}

/**
 * End Functions for profile changed password
 */
  

/**
 * Start function for my preferences
*/
 
function user_preferences($form, &$form_state){
global $user;

    if (!user_is_logged_in()) {
        drupal_access_denied();
    }

    module_load_include('inc', 'user', 'user.pages');
    $form = drupal_get_form('user_profile_form', $user);
    $form['account']['current_pass']['#access'] = 0;
    $form['account']['name']['#access'] = 0;
    $form['account']['mail']['#access'] = 0;
    $form['account']['status']['#access'] = 0;
    $form['account']['roles']['#access'] = 0;
    $form['field_nombre_s_']['#access'] = 0;
    $form['field_n_mero_identificaci_n']['#access'] = 0;
    $form['field_user_ubicaci_n']['#access'] = 0;
    $form['field_terminos']['#access'] = 0;
    $form['picture']['#access'] = 0;
    $form['timezone']['#access'] = 0;
    $form['account']['pass']['#access'] = 0;
    $form['field_n_mero_identificaci_n']['#access'] = 0;
    $form['field_tipo_identificaci_n']['#access'] = 0;
    $form['field_apellidos']['#access'] = 0;
    $form['field_tel_fono_contacto']['#access'] = 0;
    return $form;  
}


function user_preferences_submit($form, &$form_state) { 
	
}
/**
 * Finally user preferences
 */