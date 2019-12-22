const create_sourcecode_card = (
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