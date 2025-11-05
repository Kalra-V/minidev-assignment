interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] ${isUser ? 'order-2' : 'order-1'}`}>
        <div className="mb-1 flex items-center gap-2 text-xs text-neutral-500">
          <span className="font-medium">
            {isUser ? 'You' : 'Minidev'}
          </span>
          <span>{message.timestamp.toLocaleTimeString()}</span>
        </div>
        <div
          className={`rounded-lg px-4 py-2 ${
            isUser
              ? 'bg-primary text-white'
              : 'bg-neutral-100 text-neutral-900'
          }`}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
}

