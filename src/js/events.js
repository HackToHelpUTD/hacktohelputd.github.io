const loadEventData = googleSheetsUrl => {
    Tabletop.init({
        key: googleSheetsUrl,
        callback: processData,
        simpleSheet: true
    });
};

const processData = (data, tabletop) => {
    alert("Successfully processed!");
    console.log(data);
};
/**
 *
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
        <div class="event-card-background rounded p-5 ">
            <div class='pt-1'></div>
            <h2 class="text-center">
                ${event_name}
            </h2>
            <p class="text-center" style="font-size:.9rem;">
            ${event_description}
            </p>
            <span>
                <img class='float-right' style='width:58px;height:56px' src="./src/imgs/logolight.png" alt="Hack to Help Logo">
            </span>
            <div class="pt-4"></div>
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