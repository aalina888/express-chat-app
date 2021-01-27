const socket = io()

socket.on('message', (mes) => {
    console.log(mes);
});

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault();
    socket.emit('sendMessage', e.target.elements.message.value);
});

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser.');
    }

    navigator.geolocation.getCurrentPosition((position) => {
        socket.emit('sendLocation',
            {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
    });
});