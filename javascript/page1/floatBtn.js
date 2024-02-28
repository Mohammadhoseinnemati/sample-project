$("#floatBtn").on("mouseover", (event) => {
    const expandButtons = $("#expandButtons");
    const display = $(expandButtons).css('display');
    // if(display === 'block'){
    //     expandButtons.fadeOut(400);
    //     $("#floatBtn").html("<i class='fa-solid fa-plus'></i>");
    // }else{
    expandButtons.fadeIn(400)
    $("#floatBtn").html("<i class='fa-solid fa-xmark'></i>");
    // }
})

$("body").on("mousemove", (event) => {
    const expandButtons = $("#expandButtons");
    if (event.target.tagName === "BODY" || event.target.role === "dialog" || event.target.tagName === "MAIN" ||  event.target.tagName === "FOOTER") {
        expandButtons.fadeOut(400);
        $("#floatBtn").html("<i class='fa-solid fa-plus'></i>");
    }
})