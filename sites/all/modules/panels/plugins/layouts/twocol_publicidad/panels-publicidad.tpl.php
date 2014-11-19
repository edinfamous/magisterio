<?php
/**
 * @file
 * Template for a 2 column panelp layout.
 *
 * This template provides a two column panelp display layout, with
 * additional areas for the top and the bottom.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panelp of the layout. This layout supports the following sections:
 *   - $content['top']: Content in the top row.
 *   - $content['left']: Content in the left column.
 *   - $content['right']: Content in the right column.
 *   - $content['bottom']: Content in the bottom row.
 */
?>
<div class="panelp-2col-stacked clearfix panelp-display" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  <?php if ($content['top']): ?>
    <div class="p-col-top panelp-panelp">
      <div class="inside"><?php print $content['top']; ?></div>
    </div>
  <?php endif; ?>

  <div class="center-wrapper">
    <div class="panelp-col-first panelp-panelp">
      <div class="inside"><?php print $content['left']; ?></div>
    </div>
    <div class="panelp-col-last panelp-panelp">
      <div class="inside"><?php print $content['right']; ?></div>
    </div>
  </div>

  <?php if ($content['bottom']): ?>
    <div class="panelp-col-bottom panelp-panelp">
      <div class="inside"><?php print $content['bottom']; ?></div>
    </div>
  <?php endif; ?>
</div>
