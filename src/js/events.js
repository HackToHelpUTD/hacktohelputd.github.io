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
  $("#root").append(eventsLoading);
  Tabletop.init({
    key: googleSheetsUrl,
    callback: processEventData,
    simpleSheet: true
  });
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
    $("#root").append(eventsComingSoon);
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
 */
const createEventCard = (
  container_id,
  event_name,
  event_description,
  event_location,
  event_date,
  event_time,
  width,
  height
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
        <div class="event-card-background rounded p-md-5 p-3">
            <div class='pt-md-1'></div>
            <h2 class="text-center">
                ${event_name}
            </h2>
            <p class="text-center" style="font-size:.9rem;">
            ${event_description}
            </p>
            <span>
                <img class='float-right' style='width:58px;height:56px' src="./src/imgs/logolight.png" alt="Hack to Help Logo">
            </span>
            <div class="pt-md-4"></div>
            <i class="fas fa-map-marker-alt"></i> ${event_location} - ${event_date} @ ${event_time}
        </div>`;
  let card_foreground = $(card_foreground_string);

  let card_background_string = `<div class="event-card-content p-3 grayout">
            <h1 style="font-size:2rem;" class="description text-center">${event_name}</h2>
                <p style="font-size:1.7rem;" class="text-center">
                   ${event_description}
                </p>
        </div>`;
  let card_background = $(card_background_string);

  card_content_container.append(card_foreground);
  card_content_container.append(card_background);
  card.append(card_content_container);
  //For expandable cards to be finished later ...
  // card.click(function() {
  //     $(this).toggleClass("event-card-active");
  //     $(this)
  //         .siblings()
  //         .not(this)
  //         .toggleClass("hide");
  //     if ($(this).hasClass("event-card-active")) {
  //         $(this).width("1000%");
  //         $(this).height("1000%");
  //     } else {
  //         $(this).width("100%");
  //         $(this).height("100%");
  //     }
  // });

  element.append(card);
};

$(document).ready(() => {
  loadEventData(eventGoogleSheetUrl);
});
