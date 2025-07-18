document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const chatbotIcon = document.getElementById("chatbot-icon");
  const chatbotDialog = document.getElementById("chatbot-dialog");
  const calendarModal = document.getElementById("calendar-modal");
  const datePickerInput = document.getElementById("datePicker");
  const confirmDateBtn = document.getElementById("confirmDateBtn");
  const closeDateBtn = document.getElementById("closeDatePicker");
  const iframe = document.getElementById("dashboard-frame");
  const wallpaper = document.getElementById("wallpaper");
  const dateBlock = document.getElementById("date-block");
  const closeChatbotBtn = document.getElementById("closeChatbotBtn");
  const chatMessages = document.getElementById("chat-messages");
  const chatInput = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");

  let selectedDate = null;
  let isTestRunning = false; 
  
  // Date sets
  const trainingDates = [
    "2017-01-01", "2017-01-02", "2017-01-03", "2017-01-04", 
    "2017-01-06", "2017-01-07", "2017-01-08", "2017-01-09", 
    "2017-01-10", "2017-01-11", "2017-01-12", "2017-01-15", 
    "2017-01-17", "2017-01-18", "2017-01-19", "2017-01-20", 
    "2017-01-21", "2017-01-22", "2017-01-23", "2017-01-24", 
    "2017-01-25", "2017-01-27", "2017-01-28", "2017-01-29", 
    "2017-01-30", "2017-01-31", "2017-02-01", "2017-02-02", 
    "2017-02-03", "2017-02-04", "2017-02-05", "2017-02-06", 
    "2017-02-08", "2017-02-09", "2017-02-10", "2017-02-12", 
    "2017-02-13", "2017-02-14", "2017-02-15", "2017-02-16", 
    "2017-02-17", "2017-02-18", "2017-02-19", "2017-02-20", 
    "2017-02-21", "2017-02-23", "2017-02-25", "2017-02-26", 
    "2017-02-27", "2017-03-02", "2017-03-03", "2017-03-04", 
    "2017-03-05", "2017-03-06", "2017-03-07", "2017-03-08", 
    "2017-03-09", "2017-03-10", "2017-03-11", "2017-03-12", 
    "2017-03-13", "2017-03-15", "2017-03-16", "2017-03-18", 
    "2017-03-19", "2017-03-20", "2017-03-21", "2017-03-22", 
    "2017-03-24", "2017-03-25", "2017-03-26", "2017-03-27", 
    "2017-03-28", "2017-03-29", "2017-03-31", "2017-04-01", 
    "2017-04-02", "2017-04-03", "2017-04-05", "2017-04-06", 
    "2017-04-07", "2017-04-08", "2017-04-09", "2017-04-11", 
    "2017-04-12", "2017-04-13", "2017-04-14", "2017-04-15", 
    "2017-04-16", "2017-04-17", "2017-04-18", "2017-04-19", 
    "2017-04-20", "2017-04-22", "2017-04-23", "2017-04-24", 
    "2017-04-25", "2017-04-26", "2017-04-28", "2017-04-29", 
    "2017-05-01", "2017-05-02", "2017-05-03", "2017-05-04", 
    "2017-05-05", "2017-05-06", "2017-05-07", "2017-05-08", 
    "2017-05-09", "2017-05-10", "2017-05-11", "2017-05-13", 
    "2017-05-14", "2017-05-15", "2017-05-16", "2017-05-17", 
    "2017-05-18", "2017-05-19", "2017-05-20", "2017-05-21", 
    "2017-05-22", "2017-05-23", "2017-05-24", "2017-05-25", 
    "2017-05-26", "2017-05-27", "2017-05-29", "2017-05-30", 
    "2017-05-31", "2017-06-01", "2017-06-02", "2017-06-03", 
    "2017-06-04", "2017-06-05", "2017-06-08", "2017-06-09", 
    "2017-06-11", "2017-06-12", "2017-06-13", "2017-06-14", 
    "2017-06-15", "2017-06-16", "2017-06-17", "2017-06-18", 
    "2017-06-19", "2017-06-20", "2017-06-21", "2017-06-22", 
    "2017-06-23", "2017-06-24", "2017-06-25", "2017-06-27", 
    "2017-06-28", "2017-06-30", "2017-07-01", "2017-07-02", 
    "2017-07-03", "2017-07-04", "2017-07-05", "2017-07-07", 
    "2017-07-09", "2017-07-10", "2017-07-11", "2017-07-13", 
    "2017-07-14", "2017-07-15", "2017-07-16", "2017-07-17", 
    "2017-07-19", "2017-07-20", "2017-07-21", "2017-07-22", 
    "2017-07-23", "2017-07-24", "2017-07-25", "2017-07-26", 
    "2017-07-27", "2017-07-28", "2017-07-29", "2017-07-30", 
    "2017-08-01", "2017-08-02", "2017-08-04", "2017-08-06", 
    "2017-08-07", "2017-08-08", "2017-08-10", "2017-08-11", 
    "2017-08-12", "2017-08-14", "2017-08-15", "2017-08-16", 
    "2017-08-17", "2017-08-19", "2017-08-20", "2017-08-21", 
    "2017-08-22", "2017-08-23", "2017-08-24", "2017-08-25", 
    "2017-08-26", "2017-08-27", "2017-08-28", "2017-08-29", 
    "2017-08-30", "2017-08-31", "2017-09-01", "2017-09-02", 
    "2017-09-03", "2017-09-04", "2017-09-05", "2017-09-06", 
    "2017-09-07", "2017-09-08", "2017-09-09", "2017-09-11", 
    "2017-09-12", "2017-09-13", "2017-09-14", "2017-09-15", 
    "2017-09-16", "2017-09-17", "2017-09-18", "2017-09-19", 
    "2017-09-20", "2017-09-21", "2017-09-22", "2017-09-23", 
    "2017-09-24", "2017-09-25", "2017-09-26", "2017-09-27", 
    "2017-09-28", "2017-09-29", "2017-09-30", "2017-10-02", 
    "2017-10-03", "2017-10-05", "2017-10-06", "2017-10-07", 
    "2017-10-08", "2017-10-11", "2017-10-12", "2017-10-14", 
    "2017-10-15", "2017-10-16", "2017-10-17", "2017-10-18", 
    "2017-10-20", "2017-10-21", "2017-10-24", "2017-10-26", 
    "2017-10-27", "2017-10-28", "2017-10-29", "2017-10-30", 
    "2017-10-31", "2017-11-02", "2017-11-04", "2017-11-05", 
    "2017-11-06", "2017-11-07", "2017-11-08", "2017-11-09", 
    "2017-11-12", "2017-11-13", "2017-11-14", "2017-11-15", 
    "2017-11-16", "2017-11-18", "2017-11-19", "2017-11-20", 
    "2017-11-23", "2017-11-24", "2017-11-26", "2017-11-27", 
    "2017-11-28", "2017-11-29", "2017-11-30", "2017-12-01", 
    "2017-12-02", "2017-12-03", "2017-12-04", "2017-12-06", 
    "2017-12-07", "2017-12-08", "2017-12-10", "2017-12-12", 
    "2017-12-13", "2017-12-14", "2017-12-15", "2017-12-16", 
    "2017-12-18", "2017-12-21", "2017-12-22", "2017-12-23", 
    "2017-12-24", "2017-12-26", "2017-12-29", "2017-12-30" 
  ];
  
  const validationDates = [
    "2017-01-13", "2017-02-24", "2017-02-28", "2017-03-14", 
    "2017-03-23", "2017-03-30", "2017-04-21", "2017-04-27", 
    "2017-04-30", "2017-05-12", "2017-05-28", "2017-06-06", 
    "2017-06-26", "2017-07-06", "2017-07-31", "2017-08-03", 
    "2017-08-05", "2017-08-18", "2017-10-09", "2017-10-10", 
    "2017-10-19", "2017-10-22", "2017-11-03", "2017-11-10", 
    "2017-11-11", "2017-11-22", "2017-11-25", "2017-12-09", 
    "2017-12-11", "2017-12-28"];
  
    const testDates = [
    "2017-01-05", "2017-01-14", "2017-01-16", "2017-01-26", 
    "2017-02-07", "2017-02-11", "2017-02-22", "2017-03-01", 
    "2017-03-17", "2017-04-04", "2017-04-10", "2017-06-07", 
    "2017-06-10", "2017-06-29", "2017-07-08", "2017-07-12", 
    "2017-07-18", "2017-08-09", "2017-08-13", "2017-09-10", 
    "2017-10-01", "2017-10-04", "2017-10-13", "2017-10-23", 
    "2017-10-25", "2017-11-01", "2017-11-17", "2017-11-21", 
    "2017-12-05", "2017-12-17", "2017-12-19", "2017-12-20", 
    "2017-12-25", "2017-12-27"
  ];

  function formatLocalDate(date) {
    return date.getFullYear() + '-' +
           String(date.getMonth() + 1).padStart(2, '0') + '-' +
           String(date.getDate()).padStart(2, '0');
  }
  // Function to terminate a test and reset the UI
  function terminateTest() {
    // Stop the dashboard by clearing the iframe source
    iframe.src = '';
    // Hide the dashboard frame and date block
    iframe.classList.add("hidden");
    dateBlock.classList.add("hidden");
    // Bring back the wallpaper
    wallpaper.style.display = 'block'; 
    // timeout to ensure the display property is set before changing opacity
    setTimeout(() => {
        wallpaper.classList.remove("fade-out");
        wallpaper.classList.add("fade-in");
    }, 10);
    // Reset the button to its initial state
    startBtn.textContent = "Start Test";
    startBtn.classList.remove("terminate-btn");
    startBtn.disabled = false; // Re-enable it
    // Update the application state
    isTestRunning = false;
    // Ask user to choose a new date immediately
    calendarModal.classList.remove("hidden");
  }
  
flatpickr(datePickerInput, {
    dateFormat: "Y-m-d",
    enable: testDates,
    monthSelectorType: "static",
    onReady: function(selectedDates, dateStr, instance) {
      instance.jumpToDate("2017-01");
    },
    onChange: (selectedDates, dateStr) => {
      selectedDate = dateStr;
      confirmDateBtn.disabled = !dateStr;
    },
    onDayCreate: (dObj, dStr, fp, dayElem) => {
      const s = formatLocalDate(dayElem.dateObj);
      if (trainingDates.includes(s)) {
        dayElem.classList.add("training");
      } else if (validationDates.includes(s)) {
        dayElem.classList.add("validation");
      } else if (testDates.includes(s)) {
        dayElem.classList.add("test-date");
      }
    }
});

  const backendUrl = "https://real-time-load-curve-dashboard-rag.onrender.com";

  // Function to add a message to the chat window
  function appendMessage(text, sender, isThinking = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    if (isThinking) {
      messageDiv.classList.add('thinking');
    }
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    // Auto-scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageDiv; // Return the element to be able to remove it later
  }

  // Function to handle sending a message
  async function sendMessage() {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    appendMessage(userMessage, 'user');
    chatInput.value = '';
    chatInput.disabled = true; // Disable input while bot is thinking
    sendBtn.disabled = true;

    const thinkingMessage = appendMessage("Bot is thinking...", 'bot', true);

    try {
      const response = await fetch(`${backendUrl}/ask-chatbot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      thinkingMessage.remove();
      appendMessage(data.answer, 'bot');

    } catch (error) {
      console.error("Error calling chatbot:", error);
      thinkingMessage.remove();
      appendMessage("Sorry, I'm having trouble connecting right now.", 'bot');
    } finally {
      chatInput.disabled = false; // Re-enable input
      sendBtn.disabled = false;
      chatInput.focus();
    }
  }

  // Event listener for opening/closing the chatbot (Toggle functionality)
  chatbotIcon.addEventListener("click", () => {
    // Check if the dialog is currently hidden
    const isHidden = chatbotDialog.classList.contains("hidden");

    if (isHidden) {
      // If it's hidden, show it
      chatbotDialog.classList.remove("hidden");
      // And add the welcome message if it's the very first time
      if (chatMessages.children.length === 0) {
        appendMessage("Hello! I'm Jolt ⚡, your friendly energy assistant. I'm here to guide you through this project, which predicts real-time power usage using a LightGBM model trained on 2017 data. To get started, just click the 'Start Test' button below to pick a date. If you're curious about anything, just ask me!", 'bot');
      }
    } else {
      // If it's visible, hide it
      chatbotDialog.classList.add("hidden");
    }
  });

  // Event listener for closing the chatbot
  closeChatbotBtn.addEventListener("click", () => {
    chatbotDialog.classList.add("hidden");
  });

  // Event listeners for sending a message
  sendBtn.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  startBtn.addEventListener("click", () => {
    if (isTestRunning) {
      // If a test is running, the button's job is to terminate it.
      terminateTest();
    } else {
      // If no test is running, the button's job is to open the calendar.
      calendarModal.classList.remove("hidden");
    }
  });
  // Close calendar 
  closeDateBtn.addEventListener("click", () => {
    calendarModal.classList.add("hidden");
  });
  
 confirmDateBtn.addEventListener("click", () => {
    if (!selectedDate) {
      alert("Please select a valid test date.");
      return;
    }
    calendarModal.classList.add("hidden");
    startBtn.textContent = "Terminate Test"; 
    startBtn.classList.add("terminate-btn");    
    startBtn.disabled = false;                  
    isTestRunning = true;                       

    const dashUrl = `${backendUrl}/dashboard/${selectedDate}`;
    console.log("Loading Dash app at:", dashUrl);

    wallpaper.classList.add("fade-out");
    setTimeout(() => {
      wallpaper.style.display = "none";
      iframe.src = dashUrl;
      iframe.classList.remove("hidden");
      dateBlock.classList.remove("hidden");
    }, 1000);
  });
});
