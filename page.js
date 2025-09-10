document.getElementById("subscribe").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    analytics.identify(email, { email: email });
    analytics.track("Subscribed to Newsletter", { email: email });
    alert("Subscription event sent to Segment!");
});

document.getElementById("signup").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    analytics.identify(email, { email: email });
    analytics.track("Signed Up", { email: email });
    alert("Signup event sent to Segment!");
});
