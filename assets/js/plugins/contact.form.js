/**
 *
 * -----------------------------------------------------------------------------
 *
 * Template : Bizup - Creative Agency & Portfolio HTML Template
 * Author : reacthemes
 * Author URI : https://reactheme.com/ 
 *
 * -----------------------------------------------------------------------------
 *
 **/

// (function ($) {
//     'use strict';
//     // Get the form.
//     var form = $('#contact-form');

//     // Get the messages div.
//     var formMessages = $('#form-messages');

//     // Set up an event listener for the contact form.
//     $(form).submit(function (e) {
//         // Stop the browser from submitting the form.
//         e.preventDefault();

//         // Serialize the form data.
//         var formData = $(form).serialize();

//         // Submit the form using AJAX.
//         $.ajax({
//                 type: 'POST',
//                 url: $(form).attr('action'),
//                 data: formData
//             })
//             .done(function (response) {
//                 // Make sure that the formMessages div has the 'success' class.
//                 $(formMessages).removeClass('error');
//                 $(formMessages).addClass('success');

//                 // Set the message text.
//                 $(formMessages).text(response);

//                 // Clear the form.
//                 $('#name, #email,#phone,#city,#connect').val('');
//             })
//             .fail(function (data) {
//                 // Make sure that the formMessages div has the 'error' class.
//                 $(formMessages).removeClass('success');
//                 $(formMessages).addClass('error');

//                 // Set the message text.
//                 if (data.responseText !== '') {
//                     $(formMessages).text(data.responseText);
//                 } else {
//                     $(formMessages).text('Oops! An error occured and your message could not be sent.');
//                 }
//             });
//     });

// })(jQuery);




(function ($) {
    'use strict';
    
    // Get the form.
    var form = $('#contact-form');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
        // Prevent the default form submission
        e.preventDefault();

        // Display success message directly
        $(formMessages).removeClass('error').addClass('success');
        $(formMessages).text('Thank you! Your message has been successfully sent.');

        // Clear the form fields
        $('#name, #email, #phone, #city, #connect').val('');
        setTimeout(function () {
            window.location.href = '/'; // Adjust the URL if your home page is different
        }, 1000); // 2000 milliseconds = 2 seconds delay
    });

})(jQuery);