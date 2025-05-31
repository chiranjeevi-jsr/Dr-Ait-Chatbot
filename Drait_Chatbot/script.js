function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value.trim();
  if (message === '') return;

  appendMessage('user', message);
  respondToMessage(message.toLowerCase());
  input.value = '';
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById('chatBox');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respondToMessage(message) {
  let response = "I'm sorry, I don't understand. Please ask about DRAIT.";

  if (message.includes('website')) {
    response = "The DRAIT website is https://drait.edu.in. You can find info about admissions, departments, and more.";
  } else if (message.includes('admission')) {
    response = "Admission details are available under the 'Admissions' tab on our website. Visit: https://drait.edu.in/admissions";
  } else if (message.includes('courses') || message.includes('departments')) {
    response = "DRAIT offers courses in Engineering, Management, and Computer Applications.";
  } else if (message.includes('contact')) {
    response = "You can contact us at: info@drait.edu.in or call +91-80-4216 1844.";
  } else if (message.includes('location') || message.includes('where')) {
    response = "DRAIT is located in Bangalore, Karnataka, India.";
  }

  appendMessage('bot', response);
}
