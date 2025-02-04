// Tab switching logic
const dailyTab = document.getElementById('dailyTab');
const workawayTab = document.getElementById('workawayTab');
const dailyBlogs = document.getElementById('dailyBlogs');
const workawayBlogs = document.getElementById('workawayBlogs');

dailyTab.addEventListener('click', () => {
    dailyTab.classList.add('active');
    workawayTab.classList.remove('active');
    dailyBlogs.classList.add('active');
    workawayBlogs.classList.remove('active');
});

workawayTab.addEventListener('click', () => {
    workawayTab.classList.add('active');
    dailyTab.classList.remove('active');
    workawayBlogs.classList.add('active');
    dailyBlogs.classList.remove('active');
});


// Get the image, video and overlay elements
const image = document.getElementById('image');
const video = document.getElementById('video');
const overlay = document.getElementById('overlay');

// Function to expand media
function expandMedia(element) {
    element.classList.add('expanded');
    overlay.style.display = 'block';
}

// Function to shrink media
function shrinkMedia() {
    // Remove 'expanded' class to return to original size
    image.classList.remove('expanded');
    video.classList.remove('expanded');
    overlay.style.display = 'none';
}

// Add click event listeners to image and video
image.addEventListener('click', () => expandMedia(image));
video.addEventListener('click', () => expandMedia(video));

// Click anywhere off the image/video to shrink
overlay.addEventListener('click', shrinkMedia);