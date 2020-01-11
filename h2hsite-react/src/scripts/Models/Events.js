import Tabletop from "tabletop";
const eventGoogleSheetUrl =
  "https://docs.google.com/spreadsheets/d/1Mn0sNuAVtIQA6pk5qU2IE3w0jyXmUa1i8KhnUJR9PXU/edit?usp=sharing";

events = [];
eventsMap = {};
/**
 * Init
 * Initialize the tabletop plugin and load all events.
 */
const init = () => {
  Tabletop.init({
    key: googleSheetsUrl,
    callback: processEventData,
    simpleSheet: true
  });
};

/**
 * addEvent
 * @param {event} event
 */
const addEvent = event => {
  events.push(event);
  eventsMap[event["Event Name"]] = event;
};

/**
 * getAllEvents
 * @returns List of events
 */
const getAllEvents = () => {
  return events.slice();
};
/**
 * getEvent
 * Get one event by its name
 * @param {string} eventName
 * @returns An event.
 */
const getEvent = eventName => {
  return eventsMap[eventName];
};

/**
 * Call back for load event data
 * @param {*} data
 * @param {*} tabletop
 */
const processEventData = (data, tabletop) => {
  data.forEach(event => addEvent(event));
};
export { init, addEvent, getAllEvents, getEvent };
