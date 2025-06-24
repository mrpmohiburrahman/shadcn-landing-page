import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description:
      "Navigate your boards with ease using keyboard shortcuts, screen-reader support, and high-contrast themes.",
  },
  {
    icon: <MapIcon />,
    title: "Community",
    description:
      "Tap into monday.com’s global Community Forum to share ideas, get support, and vote on feature requests for Pixellog apps ",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
      "Quickly clone Pixellog apps across multiple boards and workspaces to support growing teams and complex projects",
  },
  {
    icon: <GiftIcon />,
    title: "Gamification",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container py-24 text-center sm:py-32"
    >
      <h2 className="text-3xl font-bold md:text-4xl ">
        How It{" "}
        <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="mx-auto mt-4 mb-8 text-xl md:w-3/4 text-muted-foreground">
        Search for ‘Pixellog’ on the monday.com Apps Marketplace to Install, then configure and start automating your workflows instantly.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
