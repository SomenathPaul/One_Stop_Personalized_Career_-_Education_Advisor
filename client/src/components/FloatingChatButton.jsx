import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingChatButton() {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: inputText }]);
    setInputText("");

    // Simulate AI reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "ai",
          text: "Thank you for your query! This is a demo response.",
        },
      ]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            style={{ zIndex: 10000 }}
            initial={{ opacity: 0, scale: 0.8, bottom: 80, right: 20 }}
            animate={{ opacity: 1, scale: 1, bottom: 80, right: 20 }}
            exit={{ opacity: 0, scale: 0.8, bottom: 80, right: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-5 bg-gray-900 rounded-xl shadow-lg w-80 h-96 flex flex-col"
          >
            <header className="bg-purple-700 text-white font-semibold py-3 px-4 rounded-t-xl flex justify-between items-center">
              <span>AI Career Chat</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="hover:text-gray-300 transition"
              >
                ✕
              </button>
            </header>
            <div className="flex-grow p-4 text-gray-300 overflow-auto space-y-2 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800">
              {messages.length === 0 && (
                <p className="italic text-center text-gray-500">
                  Start the conversation...
                </p>
              )}
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] p-2 rounded-md ${
                    msg.from === "user"
                      ? "bg-purple-600 text-white self-end"
                      : "bg-gray-700 text-gray-300 self-start"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <footer className="p-4 bg-gray-800 rounded-b-xl flex gap-2">
              <textarea
                rows={1}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-grow resize-none rounded bg-gray-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={handleSend}
                className="bg-purple-600 hover:bg-purple-700 rounded px-4 py-2 text-white font-semibold transition"
                aria-label="Send message"
              >
                Send
              </button>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        style={{ zIndex: 10000 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 bg-purple-600 hover:bg-purple-700 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center cursor-pointer transition"
        aria-label="Open AI chat"
      >
        🤖
      </motion.button>
    </>
  );
}
