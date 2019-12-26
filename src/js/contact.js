`<div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Write to us</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <form
  action="https://formspree.io/xbjdkwzo"
  method="POST"
>
  <label>
    Your email:
    <input type="text" name="_replyto">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>

  <!-- your other form fields go here -->

  <button type="submit">Send</button>
</form>

      </div>
      
    </div>
  </div>
</div>
`;
const contactModal = $(
  `
<div class="modal fade" id="modalContactForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h4 class="modal-title w-100 font-weight-bold">Write to us</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
           <form
  action="https://formspree.io/xbjdkwzo"
  method="POST"
>
      <div class="modal-body mx-3">
        <div class="md-form mb-3">
          <i class="fas fa-user prefix grey-text"></i>
          <input type="text" name="sender" id="form34" class="form-control validate" required>
          <label data-error="wrong" data-success="right" for="form34">Your name</label>
        </div>

        <div class="md-form mb-3">
          <i class="fas fa-envelope prefix grey-text"></i>
          <input type="email" name="_replyto" id="form29" class="form-control validate" required>
          <label data-error="wrong" data-success="right" for="form29">Your email</label>
        </div>

        <div class="md-form mb-3">
          <i class="fas fa-tag prefix grey-text"></i>
          <input type="text" id="form32" name="subject" class="form-control validate" required>
          <label data-error="wrong" data-success="right"  for="form32">Subject</label>
        </div>

        <div class="md-form">
          <i class="fas fa-pencil prefix grey-text"></i>
          <textarea type="text" id="form8"  name="message" class="md-textarea form-control" rows="4" required></textarea>
          <label data-error="wrong" data-success="right"  for="form8">Your message</label>
        </div>

      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-unique">Send <i class="fas fa-paper-plane-o ml-1"></i></button>
      </div>
      </form>
    </div>
  </div>
</div>

`
);

const setUpContactModal = () => {
  contactModal.appendTo(document.body);
  $("#contactLink").attr("data-toggle", "modal");
  $("#contactLink").attr("data-target", "#modalContactForm");
};

$(document).ready(() => {
  setUpContactModal();
});
