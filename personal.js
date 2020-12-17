//fade
$(function() {
    $('body').removeClass('fade-out');
});

//scroll
$(function() {
  $('a[href*=\\#]').on('click', function(e) {
    if (e.target.id != "send-message-resume" && e.target.id != "send_awards")
    {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    }
  });
});
