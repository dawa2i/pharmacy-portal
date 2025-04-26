document.addEventListener('DOMContentLoaded', function() {
    const notifications = [
        {
            id: 1,
            title: "Clamoxyl jour 4/12 21:50 pm",
            message: "Alarme dans 9 min",
            expiration: "Date expiration: 20/03/2026"
        },
        {
            id: 2,
            title: "Augmentin jour 7/9 12:30 pm",
            message: "Alarme dans 14h et49 min",
            expiration: "Date expiration: 21/11/2025"
        }
    ];

    function displayNotifications() {
        notifications.forEach(notif => {
            const notifElement = document.querySelector(`[data-id="${notif.id}"]`);
            if (notifElement) {
                notifElement.querySelector('.notification-title').textContent = notif.title;
                notifElement.querySelector('.notification-message').textContent = notif.message;
                notifElement.querySelector('.notification-expiration').textContent = notif.expiration;
            }
        });
    }

    displayNotifications();
});