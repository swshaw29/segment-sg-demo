document.getElementById('subscribe').addEventListener('click', () => {
    const email = document.getElementById('email').value || 'test@example.com';

    // Just track the event with email property
    analytics.track('Subscribed to Newsletter', { email });

    alert(`Tracked: Subscribed to Newsletter (${email})`);
});

document.getElementById('signup').addEventListener('click', () => {
    const email = document.getElementById('email').value || 'test@example.com';

    // Track signup event with email property
    analytics.track('User Signed Up', { email });

    alert(`Tracked: User Signed Up (${email})`);
});
