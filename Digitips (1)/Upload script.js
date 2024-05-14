const form = document.getElementById('uploadForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const videoTitle = document.getElementById('videoTitle').value;
  const videoDescription = document.getElementById('videoDescription').value;
  const videoFile = document.getElementById('videoFile').files[0];
  const thumbnailFile = document.getElementById('thumbnailFile').files[0];

  // Perform upload logic here
  // You can use AJAX, fetch, or any other method to send the data to the server

  // Clear form fields after upload
  form.reset();
});