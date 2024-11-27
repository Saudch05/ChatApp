// models/messageModel.js

class MessageModel {
  constructor() {
    this.messages = [];
  }

  // Add a new message to the list
  addMessage(message) {
    this.messages.push(message);
  }

  // Get all messages
  getMessages() {
    return this.messages;
  }
}

export default new MessageModel();
