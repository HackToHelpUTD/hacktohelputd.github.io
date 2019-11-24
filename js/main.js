function submitForm() {
    $('form[name="mc-embedded-subscribe-form"]').submit();
    $('input[type="email"], textarea').val('');
  }