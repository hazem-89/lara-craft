import { Button } from "@/src/components/ui/button";
import { Tree } from "@/public/assets/Images/svgImages";
import { ModeToggle } from "@/src/components/modeToggle/ModeToggle";
import { WelcomeBlock } from "@/src/blocks/Website/welcomeBlock/WelcomeBlock";
import { useStyles } from "./MainBackgroundStyle.styles";

export default function Home() {
  const styles = useStyles(true);

  return (
    <main className="">
      <div className="absolute top-2 right-2 z-20">
        <ModeToggle />
      </div>
      <Tree />
      <div className="flex min-h-screen flex-col items-center">
        <WelcomeBlock />
      </div>
    </main>
  );
}
