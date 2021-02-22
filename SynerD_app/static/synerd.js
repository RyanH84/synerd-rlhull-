
  $(document).ready(function() {
    $('#form').submit(function(e) {
      e.preventDefault();
      const username = $('#username').val();
      const password = $('#password').val();
      const lastName = $('#lastName').val();
      const street = $('#streetAddress').val();
      const city = $('#city').val();
      const state = $('#state').val();
      const zip = $('#zipCode').val();
      const email = $('#email').val();
      const phone = $('#phone').val();
      const country = $('#country').val();
      const dob = $('#dob').val();
      
 
      $('.error').remove();
      

      if (username.length < 8) {
        $('#username').after('<span class="error">Must be at least 8 characters</span>');
      }

      if (password == '' || password < 8) {
        $('#password').after('<span class="error">Password must contain one digit, one uppercase letter, and one lowercase letter</span>');
      } else {
        return this.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/);
      }
      
      if (lastName == '') {
        $('#lastName').after('<span class="error">Required*</span>');
      }
      if (street == '') {
        $('#streetAddress').after('<span class="error">Required*</span>');
      }
      if (city == '') {
        $('#city').after('<span class="error">Required*</span>');
      }
      if (state == '') {
        $('#state').after('<span class="error">Required*</span>');
      }
      if (zip == '') {
        $('#zipCode').after('<span class="error">Required*</span>');
      }
      if (email == '') {
        $('#email').after('<span class="error">Required*</span>');
      }
      if (phone == '') {
        $('#phone').after('<span class="error">Required*</span>');
      }
      if (country == '') {
        $('#country').after('<span class="error">Required*</span>');
      }
      if (dob == '') {
        $('#dob').after('<span class="error">Required*</span>');
      }
    });
    

  });




