
function animateBotImage() {
    gsap.from(".bot-image img", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out"
    });

    gsap.to(".bot-image img", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
    });
}

document.addEventListener('DOMContentLoaded', animateBotImage);














//bot


console.log("alwis");


let selectedSender = "Sender 1";
const mainarray=[];

var md = window.markdownit();


function selectSender(sender) {
    selectedSender = sender;
    console.log("Selected Sender: " + sender); 
}

function send() {
    if (selectedSender === "") {
        alert("Please select a sender first.");
        return;
    }

    let usermsg = document.getElementById("userinput").value;
    if (usermsg === "") {
        alert("Please enter a message.");
        return;
    }

   


    if(selectedSender=="Sender 1"){
        console.log("Minidu");
        
        let sender1msg={
            sender : "sender1",
            message:usermsg
            
        }

        mainarray.push(sender1msg);
        console.log(mainarray);

    }else if(selectedSender=="minidu"){
        console.log("minidu");

        sender1msg={
            sender : "sender22",
            message:usermsg
           
        }

        mainarray.push(sender1msg);
        console.log(mainarray);
        
    }else if(selectedSender="alwis"){

        sender1msg={
            sender : "sender33",
            message:usermsg
           
        }
        mainarray.push(sender1msg);
        console.log(mainarray);

    }
    renderMessages();
    if(selectedSender=="Sender 1"){
    aibot();
    }
    document.getElementById("userinput").value = "";

}

function renderMessages() {
    const chat = document.getElementById("senders");
    let body = ""; 

    mainarray.forEach(data => {
        if (data.sender === "sender1") {
            body += `
            <div class="d-flex flex-row justify-content-end mb-4">
                <div class="p-3 me-3 border bg-body-tertiary" style="border-radius: 15px;">
                    <p class="small mb-0">${data.message}</p>
                </div>
                <img src="img/4.jpg" alt="avatar 1" style="width: 45px; height: 100%; border-radius: 30px;">
            </div>`;
        } else if (data.sender === "sender2") {
            body += `
            <div class="d-flex flex-row justify-content-start mb-4">
                <img src="img/bot.jpg" alt="avatar 1" style="width: 45px; height: 100%; border-radius: 30px;">
                <div class="p-3 ms-3" style="border-radius: 15px; background-color: rgba(57, 192, 237, .2);">
                    <p class="small mb-0">${data.message}</p>
                </div>
            </div>`;
        }else if (data.sender === "sender22") {
            body += `
            <div class="d-flex flex-row justify-content-end mb-4">
                <div class="p-3 me-3 border bg-body-tertiary" style="border-radius: 15px;">
                    <p class="small mb-0">${data.message}</p>
                </div>
                <img src="img/4.jpg" alt="avatar 1" style="width: 45px; height: 100%; border-radius: 30px;">
            </div>`;
        }else if (data.sender === "sender33") {
            body += `
            <div class="d-flex flex-row justify-content-start mb-4">
                <img src="img/2.jpg" alt="avatar 1" style="width: 45px; height: 100%; border-radius: 30px;">
                <div class="p-3 ms-3" style="border-radius: 15px; background-color: rgba(57, 192, 237, .2);">
                    <p class="small mb-0">${data.message}</p>
                </div>
            </div>`;
        }
    });

    chat.innerHTML = body;
    chat.scrollTop = chat.scrollHeight;
}

let isFirstTime = true;  // Flag to check if it's the first time

// New function to handle the first-time logic
function getFormattedMessage(usermsgg) {
  if (isFirstTime) {
    isFirstTime = false;  // Change flag after the first message
    return usermsgg + " give response like travel chat bot";
  } else {
    return usermsgg;  // For subsequent messages, just return the user's input
  }
}
function aibot() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    // Get the user's input message
    let usermsgg = document.getElementById("userinput").value;
  
    // Send the user input with the phrase "give response like travel chatbot" once
    const raw = JSON.stringify({
      "contents": [
        {
          "parts": [
            {
              "text": usermsgg + " give response like travel chatbot"
            }
          ]
        }
      ]
    });
  
    console.log(raw);  // Log the raw data for debugging
    
    // Prepare request options for the API call
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
  
    // Call the API to generate a response
    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC-Qp2CZsOZQYKYZ30Wyq1leFGB26FStew", requestOptions)
      .then((response) => response.json())
      .then((result) => {
          console.log(result); // Log the API response for debugging
          
          // Extract the message content from the API response
          const messageContent = result?.candidates?.[0]?.content?.parts?.[0]?.text;
  
          if (messageContent) {
              // Push the bot's response to the message array
              mainarray.push({
                  sender: "sender2",
                  message: md.render(messageContent) // Assuming you use markdown rendering
              });
          } else {
              console.error("Message content is undefined");
          }
  
          // Log the array for debugging
          console.log(mainarray);
  
          // Render the messages (assumes you have a renderMessages function)
          renderMessages();
      })
      .catch((error) => {
          // Handle errors from the API call
          console.error("Error fetching data:", error);
      });
  }
  