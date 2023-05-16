function redirectToExternalSite() {
    const url = document.getElementById("urlInput").value;

    if (!url.startsWith("http://") && !url.startsWith("https://")) {

        url = "http://" + url;
    }
    window.location.href = url;
}