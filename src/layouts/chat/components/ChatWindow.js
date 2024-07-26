// ChatWindow.js
import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Card } from '@mui/material';

import SoftButton from 'components/SoftButton';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import OnlineMembersList from './OnlineMembersList';
import SoftBox from 'components/SoftBox';
import SoftTypography from 'components/SoftTypography';
import Footer from 'examples/Footer';

const sampleMembers = [
    { id: 1, name: 'John Doe', avatar: 'path-to-avatar1.jpg', description: 'Online', action: { type: 'internal'}},
    { id: 1, name: 'John Doe', avatar: 'path-to-avatar1.jpg', description: 'Online', action: { type: 'internal'}},
    { id: 1, name: 'John Doe', avatar: 'path-to-avatar1.jpg', description: 'Online', action: { type: 'internal'}},
  // Add more members as needed
];

const ChatWindow = () => {
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '' && selectedMember) {
      setMessages((prevMessages) => {
        const memberMessages = prevMessages[selectedMember.id] || [];
        return {
          ...prevMessages,
          [selectedMember.id]: [...memberMessages, { text: newMessage, sender: 'You' }],
        };
      });
      setNewMessage('');
    }
  };

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const currentMessages = messages[selectedMember?.id] || [];

  return (
    <DashboardLayout>
        <DashboardNavbar/>
        <Card>
    <Grid container>
      <Grid item xs={9}>
        <Paper style={{ height: '75vh', overflowY: 'auto' }}>
          <SoftBox p={2}>
            {selectedMember ? (
              currentMessages.map((msg, index) => (
                <SoftTypography key={index} variant="body1" gutterBottom>
                  <strong>{msg.sender}:</strong> {msg.text}
                </SoftTypography>
              ))
            ) : (
              <SoftTypography variant="body1" gutterBottom>
                Select a member to start chatting.
              </SoftTypography>
            )}
          </SoftBox>
        </Paper>
        <SoftBox mt={2} display="flex">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            disabled={!selectedMember}
          />
          <SoftButton variant="contained" color="primary" onClick={handleSendMessage} disabled={!selectedMember}>
            Send
          </SoftButton>
        </SoftBox>
      </Grid>
      <Grid item xs={3}>
        <OnlineMembersList members={sampleMembers} onMemberClick={handleMemberClick} />
      </Grid>
    </Grid>
    </Card>
    <Footer/>
    </DashboardLayout>
  );
};

export default ChatWindow;
