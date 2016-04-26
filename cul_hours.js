// $Id$
/**
 * Script helpers for cul_hours
 */
/**
 * The cul_hours object.
 */
(function ($) {
   var cul_hours = {};
   document.domain = 'cornell.edu';

   // This appends all our jQuery stuff to the Drupal behaviors variable
   Drupal.behaviors.cul_hours = {
      attach: function (context, settings) {
         // Toggle between showing a list of all libraries and only those that are currently open
         $('#showOption').click( function() {
            if ($('#showOption button').html() == "Show only what's open") {
               var numHidden = $('span.library-closed').size();
               $('#showOption button').html('Show all libraries');
               $('#showNote').html('(Hiding ' + numHidden + (numHidden == 1 ? ' library)' : ' libraries)'));
            }
            else {
               $('#showOption button').html("Show only what's open");
               $('#showNote').html('');
            }
            // Show/hide the parent div ('unit-library') for any closed libraries
            $('span.library-closed').closest('div.unit-library').toggle();
         });
      }  // End Drupal.behaviors.cul_hours definition
   };

})(jQuery);
