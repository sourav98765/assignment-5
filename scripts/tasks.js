const buttons = document.querySelectorAll('.task-btn');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        const cardTitleId = `card-title-${i + 1}`;
        CompTask(buttons[i], e, cardTitleId);
    });
}

document.getElementById('clr-his-btn').addEventListener('click', function () {
    document.getElementById('task-complete-container').innerHTML = "";
})
