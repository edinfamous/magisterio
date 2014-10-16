<?php
$output = '';

$array_sku = uc_product_get_models($node->nid, FALSE);          

foreach ($array_sku as $sku) {
    $stock_level = uc_stock_level($sku);

    $stock_counts = db_select('uc_order_products', 'up')
                    ->fields('up', array('nid','qty'))
                    ->condition('up.model', $sku, '=')
                    ->execute()
                    ->fetchAll();

    $quantity_count = 0;

    if(isset($stock_counts))  {   
        foreach($stock_counts as $stock_count ) {
            $quantity_count += $stock_count->qty;
        }   
    }

    $total = $stock_level +  $quantity_count;

    if($total == 0){
        $total = 1;
    }           

    $output .= $total . " / " . $quantity_count . " Sold out";          
  }
