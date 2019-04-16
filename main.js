const removeAdBtn = document.createElement('div');

removeAdBtn.style.zIndex = '100';
removeAdBtn.style.position = 'relative';
removeAdBtn.style.display = 'inline-block';
removeAdBtn.style.cursor = 'pointer';
removeAdBtn.style.background = '#ff0000';
removeAdBtn.style.color = 'white';
removeAdBtn.style.padding = '50px';
removeAdBtn.style.color = 'white';
removeAdBtn.textContent = 'Убрать рекламу';

removeAdBtn.addEventListener('click', function (ev) {
    ev.preventDefault();
    ev.stopPropagation();

    document.querySelector('ytd-watch-next-secondary-results-renderer ytd-thumbnail a').click();

    setTimeout(function () {
        history.back();
    }, 100);

    document.querySelector('.html5-video-container').removeChild(removeAdBtn);
});

setInterval(function () {
    if (document.querySelector('.ytp-ad-progress-list').children.length) {
        document.querySelector('.html5-video-container').appendChild(removeAdBtn);
    }
}, 1000);