document.addEventListener('DOMContentLoaded', function() {
    const chatMessagesContainer = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    let chatMessages = [];

    // Fetch messages from API
    async function fetchMessages() {
        try {
            const response = await fetch('/api/messages');
            chatMessages = await response.json();
            displayMessages();
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    }

    function displayMessages() {
        chatMessagesContainer.innerHTML = chatMessages.map(msg => `
            <div class="message ${msg.sender}">
                <div class="message-icon">
                    <i class="fas ${msg.sender === 'pharmacist' ? 'fa-user-md' : 'fa-user'}"></i>
                </div>
                <div class="message-content">
                    ${msg.type === 'image' 
                        ? `<img src="${msg.message}" alt="Crème apaisante" class="chat-image">` 
                        : msg.message}
                </div>
            </div>
        `).join('');
    }

    function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            const newMessage = {
                id: chatMessages.length + 1,
                sender: 'patient',
                message: message,
                type: 'text'
            };
            chatMessages.push(newMessage);
            displayMessages();
            messageInput.value = '';
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        }
    }

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Initial fetch of messages
    fetchMessages();
});