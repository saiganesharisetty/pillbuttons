// Define redirection URLs for each ID
const redirectUrls = {
  youtube: "https://www.youtube.com/yourchannel", // Replace with your YouTube URL
  linkedin: "https://www.linkedin.com/in/yourprofile", // Replace with your LinkedIn URL
  facebook: "https://www.facebook.com/yourpage", // Replace with your Facebook URL
  instagram: "https://www.instagram.com/yourprofile", // Replace with your Instagram URL
  twitter: "https://twitter.com/yourprofile", // Replace with your Twitter URL
  website: "https://www.yourwebsite.com", // Replace with your website URL
  whatsapp: "https://wa.me/yourphonenumber", // Replace with your WhatsApp number
};

// Function to handle click events and redirect
function handleRedirect(event) {
  const id = event.currentTarget.id;
  const url = redirectUrls[id];
  if (url) {
    window.location.href = url;
  }
}

// Attach event listeners to each block
document.getElementById("youtube").addEventListener("click", handleRedirect);
document.getElementById("linkedin").addEventListener("click", handleRedirect);
document.getElementById("facebook").addEventListener("click", handleRedirect);
document.getElementById("instagram").addEventListener("click", handleRedirect);
document.getElementById("twitter").addEventListener("click", handleRedirect);
document.getElementById("website").addEventListener("click", handleRedirect);
document.getElementById("whatsapp").addEventListener("click", handleRedirect);
