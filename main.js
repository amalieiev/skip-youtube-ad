var inProgress = false;

function skipAds() {
    document.querySelector('ytd-watch-next-secondary-results-renderer ytd-thumbnail a').click();

    setTimeout(function () {
        history.back();

        setTimeout(function () {
            inProgress = false;
        }, 500);
    }, 100);
}

function hasAds() {
    return document.querySelector('.ytp-ad-duration-remaining') ||
        document.querySelector('.ytp-ad-progress-list').children.length;
}

function watch() {
    setInterval(function () {
        if (hasAds() && !inProgress) {
            inProgress = true;
            skipAds();
        }
    }, 2000);
}

watch();