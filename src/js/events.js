const eventCardModal = $(`<div class="modal fade" id="eventCardModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document" >
    <div class="modal-content" id='eventCardModal-Content' style="background-color: rgba(0,0,0,.0001) !important;" >
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`);
const eventsComingSoon = $(`<div>
    <div class="pt-5"></div>
    <div class="pt-5"></div>
    <div class="pt-5"></div>
    <div class="pt-5"></div>
    <h1 class='text-center'>Coming Soon</h3>
    <div class="pt-5"></div>
    <div class="pt-5"></div>
    <div class="pt-5"></div>
    <div class="pt-5"></div>
    </div>`);
const eventsLoading = $(`<div class="text-center" id="events-loading" >
  <div class="spinner-border" style="width: 3rem; height: 3rem; margin-top:100px;" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>`);
const eventGoogleSheetUrl =
  "https://docs.google.com/spreadsheets/d/1Mn0sNuAVtIQA6pk5qU2IE3w0jyXmUa1i8KhnUJR9PXU/edit?usp=sharing";
/**
 * Fetch the event google sheet data.
 * @param {string} googleSheetsUrl
 */
const loadEventData = googleSheetsUrl => {
  //$("#root").append(eventCardModal);
  $("#root").addClass("justify-content-center");
  createEventCard(
    "root",
    "Bake Sale",
    "Come support our club by buying cake pops from our stall. Help us raise money so we can plan some wonderful workshops for our members.",
    "SU Lobby",
    "Tuesday Sept. 27nd",
    "11am-6pm",
    500,
    310,
    ""
  )
  createEventCard(
    "root",
    "Fall 2022 Kick Off",
    "Join us for our Fall Kickoff event. Come meet out officers, checkout our workshop lineup, and other event plans for the semester.",
    "SCI 2.210",
    "Tuesday Sept. 27th",
    "7 PM",
    500,
    310,
    " RSVP by Sept, 24th"
  )
  /*
  createEventCard(
    "root",
    "Workshop #1: React",
    "Event Description",
    "Location TBD",
    "Wednesday Nov. 5th",
    "7 PM",
    500,
    310,
    " RSVP by Nov. 3rd"
  )
  */
  /** 
  Tabletop.init({
    key: googleSheetsUrl,
    callback: processEventData,
    simpleSheet: true
  });
  */
};
/**
 * Call back for load event data
 * @param {*} data
 * @param {*} tabletop
 */
const processEventData = (data, tabletop) => {
  if (data.length == 0) {
    $("#root").removeClass("justify-content-start");
    $("#root").addClass("justify-content-center");
    $("#root").append(eventsLoading);
  } else {
    data.forEach(event =>
      createEventCard(
        "root",
        event["Event Name"],
        event["Event Description"],
        event["Event Location"],
        event["Event Date"],
        event["Event Time"],
        500,
        300
      )
    );
  }
  $("#events-loading").remove();
};
/**
 * Create an event card.
 * @param {string} container_id
 * @param {string} event_name
 * @param {string} event_description
 * @param {string} event_location
 * @param {string} event_date
 * @param {string} event_time
 * @param {int} width
 * @param {int} height
 * @param {string} rsvp_date
 */
const createEventCard = (
  container_id,
  event_name,
  event_description,
  event_location,
  event_date,
  event_time,
  width,
  height,
  rsvp_date
) => {
  const element = $("#" + container_id);
  if (element.length === 0) {
    console.log("container does not exist.");
    return;
  }

  let card = $('<div class="event-card mt-3 mx-2"></div>');
  card.width(width);
  card.height(height);
  card_content_container = $("<div class='event-card-container'>");

  card_foreground_string = `
        <div class="event-card-background rounded p-md-4 p-3">
            <div class='pt-md-1'></div>
            <h2 class="text-center" id="event-title">
                ${event_name}
            </h2>
            <p id="event_description" class="text-center" style="font-size:.9rem;">
            ${event_description}
            </p>
            <div class="pt-md-4 text-center">
            <i class="fas fa-map-marker-alt"></i> ${event_location} | ${event_date}  | ${event_time}
            </div>
            <div class="text-center" id="rsvp-container" style="margin-top:20px; height:50px; padding:5px; border-radius: 10px; vertical-align: middle">
                <img style='width:36px;height:35px' src="./src/imgs/logolight.png" alt="Hack to Help Logo">
                <span style="text-align: center; width:80%">
                  ${rsvp_date}
                </span>
            </div>
        </div>`;
  let card_foreground = $(card_foreground_string);

  /*
  let card_background_string = `<div class="event-card-content p-3 grayout">
            <h1 style="font-size:2rem;" class="description text-center">${event_name}</h2>
                <p style="font-size:1.7rem;" class="text-center">
                   ${event_description}
                </p>
        </div>`;
  let card_background = $(card_background_string);
  */

  card_content_container.append(card_foreground);
  //card_content_container.append(card_background);
  card.append(card_content_container);

  card.click(function(e) {
    $("#eventCardModal").modal("show");
    const eCard = $(this);
    $("#eventCardModal-Content").html(eCard.html());
    $("#eventCardModal-Content").width(eCard.width());
    $("#eventCardModal-Content").height(eCard.height());
  });

  element.append(card);
};

$(document).ready(() => {
  eventCardModal.appendTo(document.body);
  loadEventData(eventGoogleSheetUrl);
});
