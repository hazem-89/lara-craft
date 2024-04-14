import React from "react";
import "./welcomeBlock.style.scss";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";

export const WelcomeBlock = () => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <div className="h-screen flex items-center justify-center z-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold flex flex-col items-center gap-2 text-5xl">
          Welcome to <span className="uppercase">Planting Guide</span>
        </h1>

        {/* <Button
          variant="default"
          size="lg"
          className="text-white main-btn"
          // onClick={() => console.log("login")}
        >
          Go to main page
        </Button> */}
      </div>
    </div>
  );
};
