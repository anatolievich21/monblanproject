// DATEPICKER
flatpickr('.input',{
    altInput: true,
    dateFormat: "YYYY-MM-DD",
    altFormat: "DD-MM-YYYY",
    allowInput: true,
    wrap: true,
    parseDate: (datestr, format) => {
        return moment(datestr, format, true).toDate();
    },
    formatDate: (date, format, locale) => {
        // locale can also be used
        return moment(date).format(format);
    }
})

//VIEW SWITCHER
const posts = document.querySelector('.posts');
const template = localStorage.getItem('template');
posts.dataset.template = template;

document.querySelectorAll('button[data-view]').forEach(post => {
    post.addEventListener('click', () => {
        const view = post.dataset.view;
        posts.dataset.template = view;
        localStorage.setItem('template', view);
    });
});


