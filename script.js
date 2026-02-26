document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Děkujeme! Vaše poptávka byla úspěšně odeslána. Brzy se vám ozveme.');
    this.reset();
});
