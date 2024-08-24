"use client";

import { Tree } from "@/public/assets/Images/svgImages";
import { ModeToggle } from "@/src/components/modeToggle/ModeToggle";
import { WelcomeBlock } from "@/src/blocks/Website/welcomeBlock/WelcomeBlock";
import { useStyles } from "./MainBackgroundStyle.styles";
import { Button } from "@/src/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const styles = useStyles(true);
  const [isFirstAnimationRunning, setIsFirstAnimationRunning] = useState(false);
  useEffect(() => {
    const bodyLines = document.querySelector("#outlines");
    const eyeLines = document.querySelector("#eye");
    const innerLeftLeaves = document.querySelector("#innerLeftLeaves");
    const innerLeftLeavesPaths: any = innerLeftLeaves?.querySelectorAll("path");
    const rightInnerLeaves = document.querySelector("#rightInnerLeaves");
    const rightInnerLeavesPaths: any =
      rightInnerLeaves?.querySelectorAll("path");
    const outerLeaves = document.querySelector("#outerLeaves");
    const outerLeavesPaths: any = outerLeaves?.querySelectorAll("path");
    setIsFirstAnimationRunning(true);
    bodyLines?.classList.add("test");
    eyeLines?.classList.add("test");
    Array.from(outerLeavesPaths).forEach((path: any) => {
      path.classList.add("test");
    });
    const allPaths = [
      ...(innerLeftLeavesPaths || []),
      ...(rightInnerLeavesPaths || []),
    ];

    let maxTime = 0;

    allPaths.forEach((path: any) => {
      path.classList.add("test");
      const randomTime = Math.random() * 2000;
      maxTime = Math.max(maxTime, randomTime);
      bodyLines?.classList.remove("test");
      bodyLines?.classList.add("outlinesFil");
      eyeLines?.classList.remove("test");
      eyeLines?.classList.add("outlinesFil");
      setTimeout(() => {
        path.classList.remove("test");
        path.classList.add("opacityGrowing");
      }, randomTime);
    });

    setTimeout(() => {
      Array.from(outerLeavesPaths).forEach((path: any) => {
        path.classList.add("test");
        const randomTime = Math.random() * 2000;
        setTimeout(() => {
          path.classList.remove("test");
          path.classList.add("opacityGrowing");
        }, randomTime);
      });
    }, maxTime);
    setIsFirstAnimationRunning(false);

    setTimeout(() => {
      const allPaths = [
        ...(innerLeftLeavesPaths || []),
        ...(rightInnerLeavesPaths || []),
        ...(outerLeavesPaths || []),
      ];
      allPaths.forEach((path: any) => {
        path.classList.remove("opacityGrowing");
        path.classList.add("movingLeaves");
      });
    }, maxTime * 4);
  }, []);

  return (
    <main className="">
      <div className="absolute top-2 right-2 z-20">
        <ModeToggle />
      </div>
      <Tree />
      <div className="flex min-h-screen flex-col items-center">
        <WelcomeBlock />
      </div>
      <Button
        // variant="default"
        size="lg"
        className="text-white main-btn z-50 absolute top-0"
      >
        <span>Click me</span>
      </Button>
    </main>
  );
}
