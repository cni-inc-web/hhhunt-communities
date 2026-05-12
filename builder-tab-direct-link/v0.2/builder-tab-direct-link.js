$(function () {

    function changeTab() {
        var tabName = window.location.hash.substr(1);
        var tabEl = $('[data-w-tab="' + tabName + '"]');

        if (tabEl.length) {
            tabEl.trigger('click');
        }
    }

    // wait for Webflow + DOM + tabs
    setTimeout(function () {
        if (window.location.hash) {
            changeTab();
        }
    }, 200);

    // internal navigation
    $(window).on('hashchange', changeTab);

    // update URL on click
    $('[data-w-tab]').on('click', function () {
        history.pushState({}, '', '#' + $(this).data("w-tab"));
    });

});