import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LinedContainerProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

const LinedContainer = ({ children, className, containerClassName }: LinedContainerProps) => {
  return (
    <div className={cn("lined-container", className)}>
      <div className={cn("container mx-auto px-6", containerClassName)}>
        {children}
      </div>
    </div>
  );
};

export default LinedContainer;
