import React from "react";
import { Button } from "../../../components/ui/button";
import "./welcomeBlock.style.scss";

export const StartPage = () => {
  return (
    <div className="h-screen flex items-center justify-center z-10">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold flex flex-col items-center gap-2 text-5xl">
          Welcome to <span className="uppercase">Planting Guide</span>
        </h1>
        <Button
          variant="default"
          size="lg"
          className="text-white main-btn"
          // onClick={() => console.log("login")}
        >
          Go to main page
        </Button>
      </div>
    </div>
  );
};
