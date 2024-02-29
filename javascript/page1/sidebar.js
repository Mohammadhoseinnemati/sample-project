function setAttr(element, key, value) {
    $(element).attr(key, value);
}

function moveSideBar(right, type) {
    let i = right;
    let equalNum;
    setTimeout(() => {
        if (type == "show") {
            equalNum = 256;
            i++;
        } else if (type == "hide") {
            equalNum = 0;
            i--;
        }
        if (i !== equalNum) {
            $(".content").css("padding-right", `${i}px`);
            moveSideBar(i, type)
        }
    }, 1)
}

function sidebarToggle(event, button) {
    const sidebar = $(`#${$(button).attr("sidetarget")}`);
    const visibility = $(sidebar).attr("sidevisibility");
    let right = 0;
    if (visibility == "false") {
        setAttr(sidebar, "sidevisibility", "true");
        $(sidebar).fadeIn(1000);
        moveSideBar(right, "show");
    } else if (visibility == "true") {
        right = 256;
        setAttr(sidebar, "sidevisibility", "false");
        $(sidebar).fadeOut(1000);
        moveSideBar(right, "hide");
    }
}

$("#userSideBar").click((event) => {
    if (event.target.id !== 'sidebar' && event.target.id !== "sidebarToggle") {
        const sidebarContext = $("#userSideBar");
        setAttr(sidebarContext, "sidevisibility", "false");
        moveSideBar(0, "hide");
        $(sidebarContext).fadeOut();
    }
})