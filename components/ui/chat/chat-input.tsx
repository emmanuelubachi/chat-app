import * as React from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

type ChatInputProps = React.ComponentProps<typeof Textarea>;

const ChatInput = ({ className, onChange, ...props }: ChatInputProps) => {
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 40,
    maxHeight: 200,
  });

  return (
    <Textarea
      autoComplete="off"
      ref={textareaRef}
      name="message"
      onChange={(e) => {
        if (!onChange) return;
        onChange(e);
        adjustHeight();
      }}
      className={cn(
        "px-4 py-3 bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md flex items-center h-16 resize-none",
        className
      )}
      {...props}
    />
  );
};
ChatInput.displayName = "ChatInput";

export { ChatInput };
