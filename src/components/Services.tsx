import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Code Collaboration",
    description:
      "Sync GitHub pull requests and code updates directly into your monday.com boards for real-time visibility.",
    icon: <ChartIcon />,
  },
  {
    title: "Project Management",
    description:
      "Build Kanban boards, Gantt charts, and custom dashboards in minutes to visualize tasks, dependencies, and milestones.",
    icon: <WalletIcon />,
  },
  {
    title: "Task Automation",
    description:
      "Set up custom automations once and let them run themselves to save hours of manual work every week.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
              Client-Centric{" "}
            </span>
            Services
          </h2>

          <p className="mt-4 mb-8 text-xl text-muted-foreground ">
            We tailor each monday.com app to your exact workflows, providing hands-on onboarding and 24/7 support.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="flex items-start justify-start gap-4 space-y-1 md:flex-row">
                  <div className="p-1 mt-1 bg-primary/20 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="mt-2 text-md">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
