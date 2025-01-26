
# **DocuSign AI - Document Insights and Chat**

DocuSign AI is a React-based web application that streamlines document workflows with AI-powered insights and tools. Users can upload documents, chat with an AI to extract insights, and interact through both text and audio inputs. The app supports light and dark modes for a personalized user experience.

---

## **Features**

### **1. User Authentication**
- **Login with DocuSign**: Authenticate users securely using DocuSign OAuth.
- **Logout**: End user sessions and clear stored tokens.

### **2. Document Insights**
- View uploaded documents.
- Upload new documents or scan documents using the device camera (mobile-only).
- Select a document to interact with in the chat interface.

### **3. Chat Insights**
- Chat with AI for document insights:
  - **Text Input**: Type questions about the document.
  - **Audio Input**: Record voice messages for transcription and analysis.
- Dynamic chat interface:
  - Displays AI responses alongside user messages.
  - Responsive layout adapts to both desktop and mobile devices.

### **4. Theme Customization**
- Toggle between light and dark themes using an intuitive theme toggle with icons.
- Theme preferences dynamically update throughout the app.

---

## **Tech Stack**

### **Frontend**
- **React**: Component-based UI library.
- **Vite**: Fast development server and build tool.
- **TailwindCSS**: Utility-first CSS framework for responsive and modern styling.
- **React Router**: For seamless navigation.

### **State Management**
- **React Context API**: Manage global state for `theme`, `selected document`, and other shared data.

### **Audio Processing**
- **MediaRecorder API**: Record audio for voice interactions.

---

## **Folder Structure**

```
src/
├── components/        # Reusable components (e.g., ThemeToggle, LogoutButton)
├── context/           # Context for managing theme and document state
├── pages/             # Page components (e.g., Home, DocumentInsights, Chat)
├── App.jsx            # Main app entry point
├── index.css          # Global CSS
└── main.jsx           # Vite main entry point
```

---

## **Getting Started**

### **1. Prerequisites**
- Node.js (>= 14.x)
- npm (>= 7.x)

### **2. Clone the Repository**
```bash
git clone https://github.com/yourusername/docusign-ai.git
cd docusign-ai
```

### **3. Install Dependencies**
```bash
npm install
```

### **4. Start the Development Server**
```bash
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173).

---

## **Usage**

### **Home Page**
1. **Login Using DocuSign**: Authenticate and access the app.
2. View app overview and features.

### **Document Insights**
1. View uploaded documents or upload new ones.
2. On mobile devices, scan documents using the camera.
3. Select a document to render in the chat interface.

### **Chat Page**
1. Interact with the selected document through:
   - **Typed Messages**: Type questions for AI insights.
   - **Voice Messages**: Record audio for transcription and AI responses.
2. View AI responses dynamically in the chat window.

### **Theme Toggle**
- Switch between light and dark themes using the theme toggle in the navigation bar.

---

## **Deployment**

### **1. Build for Production**
```bash
npm run build
```

### **2. Serve Static Files**
**AWS Amplify** to deploy the app.

---

## **Contributing**

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Submit a pull request.

---

## **Future Enhancements**
- Integrate with DocuSign API for real-time document fetching.
- Add backend support for AI and transcription with services like OpenAI and Google Speech-to-Text.
- Implement persistent theme preferences using `localStorage`.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**

- **DocuSign**: For authentication and document management.
- **OpenAI**: For AI-powered insights.
- **TailwindCSS**: For beautiful and responsive styling.

---
