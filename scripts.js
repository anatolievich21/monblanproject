// DATEPICKER
flatpickr('.input',{
    altInput: true,
    dateFormat: "YYYY_MM_DD",
    altFormat: "DD_MM_YYYY",
    defaultDate: ["09_08_2016"],
    allowInput: true,
    wrap: true,
    parseDate: (datestr, format) => {
        return moment(datestr, format, true).toDate();
    },
    formatDate: (date, format) => {
        return moment(date).format(format);
    }
})

//VIEW SWITCHER
const posts = document.querySelector('.posts');
let template = localStorage.getItem('template') || 'list';
posts.dataset.template = template;

if (!localStorage.getItem('template')) {
    localStorage.setItem('template', 'list');
}

const updateActiveState = () => {
    document.querySelectorAll('.svg-button').forEach(button => {
        const view = button.dataset.view;

        button.classList.toggle('active', view === template);
        button.classList.toggle('inactive', view !== template);
    });
};

document.querySelectorAll('.svg-button[data-view]').forEach(post => {
    post.addEventListener('click', () => {
        const view = post.dataset.view;
        template = view;
        posts.dataset.template = view;
        localStorage.setItem('template', view);
        updateActiveState();
    });
});

updateActiveState();


