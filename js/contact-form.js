(function () {
    emailjs.init({
        publicKey: "OrQ-AWyuUO-A99v7V",
        serviceId: "service_hx1ppkx",
    });
})();
window.onload = function () {
    document.getElementById('contact-form-element').addEventListener('submit', function (event) {
        event.preventDefault();
        const form = this;
        emailjs.sendForm('service_hx1ppkx', 'template_hug3nlk', this)
            .then(() => {
                form.innerHTML = `
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">Success!</strong>
                        <span class="block sm:inline">Your message has been sent successfully!</span>
                    </div>
                `;
            }, (error) => {
                console.log('FAILED...', error);
                const errorMessage = document.createElement('div');
                errorMessage.className = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4';
                errorMessage.role = 'alert';
                errorMessage.innerHTML = `
                    <strong class="font-bold">Error!</strong>
                    <span class="block sm:inline">There was an error sending your message. Please try again later.</span>
                `;
                form.appendChild(errorMessage);
            });
    });
}