const chatbox = document.getElementById('chatbox');

function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value;
  if (!message) return;
  chatbox.innerHTML += `<p><b>You:</b> ${message}</p>`;
  input.value = '';

  let answer = '';
  const msg = message.toLowerCase();
  if (msg.includes('name')) answer = 'My name is Elif Rabia Sözdüyar.';
  else if (msg.includes('school') || msg.includes('study')) answer = 'I am starting my Master’s in Marketing Analytics at FHWN in September 2025.';
  else if (msg.includes('skills')) answer = 'I am skilled in Microsoft Office, R, SPSS, and Python.';
  else if (msg.includes('experience')) answer = 'I have experience as a Project Management Intern, Assistant at a language school, and Event Organizer.';
  else answer = "I don't have an answer for that yet 🙂";

  chatbox.innerHTML += `<p><b>Bot:</b> ${answer}</p>`;
  chatbox.scrollTop = chatbox.scrollHeight;
}
