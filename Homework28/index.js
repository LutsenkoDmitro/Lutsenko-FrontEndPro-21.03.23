function redirectToExternalSite() {
    const url = prompt('Please enter the URL of the external site:');

    if (!url) {
        return;
    }

    const hasProtocol = /^https?:\/\//.test(url);
    const fullUrl = hasProtocol ? url : `http://${url}`;
    window.location.href = fullUrl;
}