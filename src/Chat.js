import React, { useState } from 'react';

const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState('');

	const handleSendMessage = async () => {
		if (newMessage.trim() === '') return;
  
		// Add user message to the state
		const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
		setMessages(updatedMessages);
		setNewMessage('');
	
		// Simulate backend response (you'd replace this with actual API calls)
		const botResponse = await getBotResponse(newMessage);
	
		// Add bot response to the state
		setMessages([...updatedMessages, { text: botResponse, sender: 'bot' }]);
	};
  
	const getBotResponse = async (userMessage) => {
		try {
			console.log(userMessage);
			const response = await fetch('https://pibot-backend.onrender.com/interaction', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ prompt: userMessage })
			});
	
			if (!response.ok) {
				throw new Error('Failed to fetch response from server');
			}
	
			const data = await response.json();
			return `${data.result}`;
		} catch (error) {
			console.error('Error:', error);
			return 'Sorry, there was an error processing your request';
		}
	};
	

	return (
		<div>
			<div style={{height: '75vh', width: '100vh', overflowY: 'scroll', border: '1px solid #000', marginBottom: '10px', padding: '10px', display: 'flex', flexDirection: 'column'}}>
				{messages.map((message, index) => (
					<div key={index} style={{ textAlign: 'left', maxWidth: '70%', margin:'5px', borderRadius: '10px', background: message.sender === 'user' ? '#4CAF50' : '#2196F3', color: 'white', padding: '10px' }}>
						{message.text}
					</div>
				))}
			</div>

			<div>
				<input
					type="text"
					placeholder="Type your message..."
					value={newMessage}
					onChange={(e) => setNewMessage(e.target.value)}
					onKeyPress={(e) => {
						if (e.key === 'Enter') {
							handleSendMessage();
						}
					}} style={{ width: '97vh', marginRight: '10px', }}
				/>
				<button onClick={handleSendMessage} style = {{height: '2.5vh', width: '2.5vh', borderRadius: 20, border: '0.01px solid #000',}}></button>
			</div>
		</div>
	);
};

export default Chat;
