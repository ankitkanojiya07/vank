import { Loader } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex h-dvh items-center justify-center w-full py-8">
      <div className="flex flex-col items-center justify-center gap-2.5">
        <p className="text-4xl animate-pulse">Vanaashrya</p>
        <Loader className="animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
