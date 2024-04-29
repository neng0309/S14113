let videoQueue = [];

function addToQueue() {
    let videoUrl = document.getElementById("videoUrl").value;
    if (videoUrl !== "") {
        videoQueue.push(videoUrl);
        displayQueue();
        document.getElementById("videoUrl").value = "";
    }
}

function displayQueue() {
    let container = document.getElementById("video-container");
    container.innerHTML = "";
    videoQueue.forEach(function(videoUrl) {
        let videoId = videoUrl.split("=")[1];
        let videoFrame = `<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe></div>`;
        container.innerHTML += videoFrame;
    });
}
