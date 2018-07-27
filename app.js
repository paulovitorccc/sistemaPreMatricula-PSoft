//Google Login
function onLoadFunction() {
    gapi.client.setApiKey('AIzaSyBCGGTPUJVJRNzz2FR8SRhitGy1K1mzqH8');
    gapi.client.load('plus', 'v1', function() {});
}