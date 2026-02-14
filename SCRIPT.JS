const socket = io();
const chatBox = document.getElementById('chat-box');
const input = document.getElementById('msg-input');

function sendMessage() {
  const msg = input.value.trim();
  if (msg !== '') {
    socket.emit('send_message', msg);
    input.value = '';
  }
}

socket.on('receive_message', (msg) => {
  const p = document.createElement('p');
  p.innerText = msg;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
});
