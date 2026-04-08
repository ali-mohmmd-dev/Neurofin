const VisionMission = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Our Vision & Mission
            </h2>
          </div>
          <div className="space-y-16">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground leading-none">Global Financial Intelligence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To become the global benchmark for AI-driven financial education, where every student graduates not just with knowledge, but with the systems and intelligence to reshape the industry.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground leading-none">Empowering Future Leaders</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We mission is to democratize high-end financial technology and provide hands-on mentorship that transforms ambitious individuals into capable architects of the future economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
