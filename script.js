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