import { cn } from "@/lib/utils"

export default function Home( {...props} ) {
  return (
    <div className={cn("flex flex-col h-full p-5 items-center justify-center", props.className)}>
      Main Content
    </div>
  );
}
