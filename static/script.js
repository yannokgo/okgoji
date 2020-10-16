/* JavaScript Media Queries */
if (matchMedia) {
    const mq = window.matchMedia("(min-width: 700px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {

    const msg = (mq.matches ? "more" : "less") + " than 700 pixels";
    document.getElementById("checkbox").checked = false;

}
