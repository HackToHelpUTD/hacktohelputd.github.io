const sourceCodeComingSoon = $(`<div>
    <div class="pt-5"></div>
    <div class="pt-5"></div>
    <div class="pt-5"></div>
    <div class="pt-5"></div>
    <h3 class='text-center' id='source-comingsoon'>Coming Soon</h3>
    <div class="pt-5"></div>
    <div class="pt-5"></div>
    <div class="pt-5"></div>
    <div class="pt-5"></div>
    </div>`);
const sourceCodeLoading = $(`<div class="text-center" id="sourcecode-loading" >
  <div class="spinner-border" style="width: 3rem; height: 3rem; margin-top: 100%; " role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>`);
const sourceCodeGoogleSheetUrl =
  "https://docs.google.com/spreadsheets/d/1A7Fqgj1_d0XaVn3AEdnnJRFNjYKgllGRLyaug2PTtgQ/edit?usp=sharing";
const loadSourceCodeData = googleSheetsUrl => {
  $("#source-code-root").append(sourceCodeComingSoon);
  /*Tabletop.init({
    key: googleSheetsUrl,
    callback: processSourceCodeData,
    simpleSheet: true
  });
  */
};

const processSourceCodeData = (data, tabletop) => {
  if (data.length == 0) {
    $("#source-code-loading-area").append(sourceCodeComingSoon);
  } else {
    console.log('processSourseCodeData was called');
    data.forEach(event =>
      createSourceCodeCard(
        "source-code-root",
        event["Project Name"],
        event["Project Description"],
        event["Project Download Link"]
      )
    );
  }
  $("#sourcecode-loading").remove();
};
const createSourceCodeCard = (
  container_id,
  project_name,
  project_description,
  project_download_link
) => {
  const container = $(`#${container_id}`);
  const create_string = `<div class="card mx-3 my-3" style="width:18rem;height:12.625rem;">
        <div class="card-body">
            <h5 class="card-title">${project_name}</h5>
            <p class="card-text">
              ${project_description}
                    </p>
            <a href="${project_download_link}" class="btn btn-primary">Source Code</a
            >
        </div>
    </div>`;

  const element = $(create_string);

  container.append(element);
};

$(document).ready(() => {
  loadSourceCodeData(sourceCodeGoogleSheetUrl);
});
