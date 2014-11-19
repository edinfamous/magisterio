<?php

// Plugin definition
$plugin = array(
  'title' => t('Publicidad y contenido'),
  'category' => t('Columns: 2'),
  'icon' => 'twocol_publicidad.png',
  'theme' => 'panels_publicidad',
  'css' => 'twocol_publicidad.css',
  'regions' => array(
    'top' => t('Top'),
    'left' => t('Left side'),
    'right' => t('Right side'),
    'bottom' => t('Bottom')
  ),
);
