const RenderPlayerList = (source, identifier, id) => {
    return `
        <div class="listcard" id="${id}">
            <div class="playerid-txt">${source}</div>
            <div class="identifier"> ${identifier}</div>
        </div>
    `;
};

const OpenScoreboard = (data, count) => {
    let html = "";
    $("#scoretitle").html(`Online <br> Players `); // ${count} 
    data.forEach((item, index) => {
        let identifier = item.identifier;
        let source = item.source;
        html += RenderPlayerList(source, identifier, index);
    });
    $("#playerlist").html(html);
};

const CloseScoreboard = () => {
    $("#playerlist").html(" ");
    $("#scoretitle").html(" ");
};

const ForceClose = () => {
    $.post(`https://${GetParentResourceName()}/CloseScoreboard`);
    return CloseScoreboard();
};

window.addEventListener("message", (event) => {
    const data = event.data;
    const playerlist = data.data;
    const action = data.action;
    switch (action) {
        case "OPEN_BOARD":
            return OpenScoreboard(playerlist, data.count);
        case "CLOSE_BOARD":
            return CloseScoreboard();
        default:
            return;
    }
});

document.onkeyup = function (event) {
    const charCode = event.key;
    if (charCode == "Escape" || charCode == "Backspace") {
        ForceClose();
    }
};
