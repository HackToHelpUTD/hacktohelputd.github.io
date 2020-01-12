import Tabletop from "tabletop";

const eventGoogleSheetsUrl =
  "https://docs.google.com/spreadsheets/d/1Mn0sNuAVtIQA6pk5qU2IE3w0jyXmUa1i8KhnUJR9PXU/edit?usp=sharing";

let events = [];
let eventsMap = {};
let globalCB = null;
/**
 * Init
 * Initialize the tabletop plugin and load all events.
 */
const init = finishedCallback => {
  globalCB = finishedCallback;
  Tabletop.init({
    key: eventGoogleSheetsUrl,
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
  if (globalCB != null) {
    globalCB();
  }
};
export { init, addEvent, getAllEvents, getEvent };
