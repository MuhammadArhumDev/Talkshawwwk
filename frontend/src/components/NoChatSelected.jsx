import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        {/* Icon Display */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            <div
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
             justify-center animate-bounce"
            >
              <MessageSquare className="w-8 h-8 text-primary " />
            </div>
          </div>
        </div>

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Welcome to Talkshawwwk!</h2>
        <p className="text-base-content/60">
          Select a conversation from the sidebar to start chatting
        </p>
        <p>
          <span className="text-primary font-semibold">Talkshawwwk</span> is a
          chat application that allows you to connect with your friends and
          family in real-time. Start a conversation now!
        </p>
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://linkedin.com/in/MuhammadArhum"
            target="_blank"
            rel="noreferrer"
            className="text-primary font-semibold"
          >
            Muhammad Arhum
          </a>
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
