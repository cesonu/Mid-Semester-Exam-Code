// Change background color of the event title on hover

        document.getElementById('event-title').addEventListener('mouseover', function () {
            this.style.backgroundColor = 'orange';
        });
        document.getElementById('event-title').addEventListener('mouseout', function () {
            this.style.backgroundColor = '';
        });
         // Form validation and alert on submission
    const form = document.getElementById('sign-in_form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank You for Submiting. We will get back to you ASAP');
    });
    
    

