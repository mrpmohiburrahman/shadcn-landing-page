
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="py-12 border rounded-lg bg-muted/50">
        <div className="flex flex-col-reverse items-center gap-8 px-6 md:flex-row md:gap-12">
          <img
            src={pilot}
            alt="Pilot illustration"
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl font-bold md:text-4xl">
                <span className="text-transparent bg-gradient-to-b from-primary/60 to-primary bg-clip-text">
                  About{' '}
                </span>
                The Company
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Pixellog is a remote-first monday.com technology partner based in Comilla, Bangladesh, building custom apps that automate workflows and extend the monday.com Work OS using its Vibe design system and flexible APIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
