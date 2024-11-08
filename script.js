document.getElementById('showFormBtn').addEventListener('click', function() {
    document.getElementById('contact-form').style.display = 'block';
    document.getElementById('talk-now').style.display = 'none';
});

document.getElementById('talkNowBtn').addEventListener('click', function() {
    document.getElementById('talk-now').style.display = 'block';
    document.getElementById('contact-form').style.display = 'none';
});

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
