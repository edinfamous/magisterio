<?php
/**
 * Functions for perfil change password
 * @param unknown $form
 * @param unknown $form_state
 * @return multitype:string number boolean NULL
 */

function page_usuario_register($form, &$form_state){
	if (user_is_anonymous()) {
	    return drupal_access_denied(); // Or drupal_access_denied()?
	  }
	// Get the currently logged in user object.
	$form['#account'] = $GLOBALS['user'];
	// Textfield cor current password confirmation.
  	$form['current_pass'] = array(
	    '#type' => 'password',
	    '#title' => t('Current password'),
	    '#size' => 25,
	    '#required' => TRUE
  	);
	// Password confirm field.
	$form['account']['pass'] = array(
	    '#type' => 'password_confirm',
	    '#size' => 25,
	    '#title' => t('New Password'),
	    '#required' => TRUE
  	);
  	$form['submit'] = array(
	    '#type' => 'submit',
	    '#value' => t('Submit')
  	);
  	return $form;  
}

function page_usuario_register_validate(&$form, &$form_state){
	require_once DRUPAL_ROOT . '/' . variable_get('password_inc', 'includes/password.inc');
	
	// Make sure the provided current password is valid for this account.
	if (!user_check_password($form_state['values']['current_pass'], $form['#account'])) {
		form_set_error('current_pass', t('The current password you provided is incorrect.'));
	}
}

/**
 * Submit handler for change_password_form().
 */
function page_usuario_register_submit(&$form, &$form_state) {
	  // Set up the edit array to pass to user_save()
	  $edit = array('pass' => $form_state['values']['pass']);
	
	  // Save the account with the new password.
	  user_save($form['#account'], $edit);
	
	  // Inform the user.
	  drupal_set_message(t('Your password has been changed.'));
}

/**
 * End Functions for profile changed password
 */
  

/**
 * Start function for my preferences
*/
 
function user_preferences($form, &$form_state){
	if (user_is_anonymous()) {
	    return drupal_access_denied(); // Or drupal_access_denied()?
	  }
  	$form['date-birth'] = array(
	    '#type' => 'date',
	    '#title' => t('Date of birth'),
	    '#required' => TRUE
  	);
	$form['workplace'] = array(
	    '#type' => 'textfield',
	    '#size' => 25,
	    '#title' => t('Workplace'),
	    '#required' => TRUE
  	);
	$form['type-institution'] = array(
	    '#type' => 'select',
	    '#title' => t('Type institution'),
		'#options' => array(
			      0 => t('Prueba 1'),
			      1 => t('Prueba 2'),
    	),
	    '#required' => TRUE
  	);
	$form['character-institution'] = array(
	    '#type' => 'radios',
	    '#size' => 25,
	    '#title' => t('Character institution'),
		'#options' => array(
			      0 => t('Public'),
			      1 => t('Private'),
    	),
	    '#required' => TRUE
  	);
	$form['zone-institution'] = array(
	    '#type' => 'radios',
	    '#title' => t('zone institution'),
		'#options' => array(
			      0 => t('Rural'),
			      1 => t('Town'),
    	),
	    '#required' => TRUE
  	);
	$form['charge'] = array(
	    '#type' => 'select',
	    '#title' => t('Chargue'),
		'#options' => array(
			      0 => t('Prueba 1'),
			      1 => t('Prueba 2'),
    	),
	    '#required' => TRUE
  	);
	$form['occupation'] = array(
	    '#type' => 'select',
	    '#title' => t('Occupation'),
		'#options' => array(
			      0 => t('Prueba 1'),
			      1 => t('Prueba 2'),
    	),
	    '#required' => TRUE
  	);
	$form['events'] = array(
	    '#type' => 'radios',
	    '#title' => t('He has participated in some event of teaching:'),
		'#options' => array(
			      0 => t('Yes'),
			      1 => t('No'),
    	),
	    '#required' => TRUE
  	);		
	
  	$form['submit'] = array(
	    '#type' => 'submit',
	    '#value' => t('Submit')
  	);
  	return $form;  
}


function user_preferences_submit($form, &$form_state) { 
	global $user;
	$value_table = array();
	$value_table['uid']		 			= $user->uid;
	$value_table['date_birth']	 		= $form_state['values']['date-birth'];
	$value_table['workflow']	 		= $form_state['values']['workplace'];
	$value_table['typeInstitution']		= $form_state['values']['type-institution'];
	$value_table['characterInstitution']= $form_state['values']['character-institution'];
	$value_table['zoneInstitution']		= $form_state['values']['zone-institution'];
	$value_table['charge']				= $form_state['values']['charge'];
	$value_table['ocupation']			= $form_state['values']['occupation'];
	$value_table['events']				= $form_state['values']['events'];
	
	if($value_table['date_birth'] == "") {
		$res = db_insert('user_magis',array('pid'))->fields($value_table)->execute();
	} else {
		$res = db_update('user_magis',array('pid'))->fields($value_table)->condition($user->uid, $value_table['uid'], '=')->execute();
	}
	if ($res==0 || $res== $value_table['uid'] ) {
		drupal_set_message(t('The data have been properly stored. Thank you!' ));
	} else {
		drupal_set_message(t('The data is not stored properly.' ), 'error');
	}
}
/**
 * Finally user preferences
 */