const video = document.getElementById('video');
const faceApiStatus = document.getElementById('faceapi');
const detectButton = document.getElementById('detectButton');
let emotionDetected = false;

detectButton.addEventListener('click', () => {
  detectButton.disabled = true;
  detectButton.innerText = 'Processing...';
  alert("Detection process started. Please wait...");
  emotionDetected = false;
  loadModelsAndStartVideo();
});

function loadModelsAndStartVideo() {
  faceApiStatus.innerText = 'Loading models...';
  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
  ])
  .then(() => {
    faceApiStatus.innerText = 'Models loaded successfully. Starting video...';
    startVideo();
  })
  .catch(err => {
    console.error('Error loading models:', err);
    faceApiStatus.innerText = 'Failed to load models. Please try again later.';
    detectButton.disabled = false;
    detectButton.innerText = 'Try Again';
  });
}

function startVideo() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
      video.onloadeddata = () => detectEmotion();
    })
    .catch(err => {
      console.error("Error accessing the webcam: ", err);
      faceApiStatus.innerText = 'Error accessing webcam. Please grant permission.';
      detectButton.disabled = false;
      detectButton.innerText = 'Try Again';
    });
}

function detectEmotion() {
  const canvas = faceapi.createCanvasFromMedia(video);
  document.body.append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);

  const interval = setInterval(async () => {
    if (emotionDetected) {
      clearInterval(interval);
      return;
    }

    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();

    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

    if (detections.length > 0) {
      const expressions = detections[0].expressions;
      const maxExpression = Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);

      emotionDetected = true;
      faceApiStatus.innerText = `Face Status: You look ${maxExpression}!`;
      showOffer(maxExpression);
    }
  }, 100);
}

function showOffer(emotion) {
  let card = document.getElementById("offerCard");
  let title = document.getElementById("offerTitle");
  let message = document.getElementById("offerMessage");

  card.className = "offer-card " + emotion;

  let offers = {
    happy: [
      "🎉 Congratulations! You're in a great mood! Get 40% off on your next order! You've got an exclusive offer at Shrangila Hotel. Use the code #she00767 to get your discount!"
    ],
    sad: [
      "❤️ Cheer Up! Don't worry! Enjoy a 30% discount to lift your spirits! Use the code #she00456 at Shrangila Hotel to make your day better!"
    ],
    angry: [
      "🔥 Stay Calm! Take a deep breath! Here's a 25% discount for relaxation. Relax with 25% off at Shrangila Hotel using the code #she00987."
    ],
    neutral: [
      "😊 Stay Positive! Get a 30% discount and make your day even better! Enjoy a 30% off at Shrangila Hotel with the code #she00321."
    ]
  };
  
  title.textContent = offers[emotion][0];
  message.textContent = offers[emotion][1];

  card.style.display = "block";
}

function closeOffer() {
  document.getElementById("offerCard").style.display = "none";
}
