import React, { useRef, useCallback } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { SpotlightCard } from "../../components/ui/spotlight-card";
import TextType from "../../components/ui/TextType";
import CountUp from "../../components/ui/CountUp";
import GradientText from "../../components/ui/GradientText";
import ShinyText from "../../components/ui/ShinyText";
import TrueFocus from "../../components/ui/TrueFocus";
import CircularGallery from "../../components/ui/CircularGallery";
import Stepper, { Step } from "../../components/ui/Stepper";
import VariableProximity from "../../components/ui/VariableProximity";

const navigationItems = [
  { label: "Product", href: "#aura-showcase" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
];

const featureCards = [
  {
    title: "Get efficiency.",
    description: "Turn leads into clients.",
    delay: "400ms",
  },
  {
    title: "Get quality.",
    description: "Our premium professional solutions.",
    delay: "600ms",
  },
  {
    title: "Get Freedom.",
    description: "There is no limit.",
    delay: "800ms",
  },
];

const statsData = [
  { value: "99%", numericValue: 99, label: "Get efficiency.", delay: "200ms", type: "percentage" },
  { value: "V.I.P", numericValue: 0, label: "Get quality.", delay: "400ms", type: "gradient" },
  { value: "∞", numericValue: 0, label: "Get Freedom.", delay: "600ms", type: "ascii" },
];

const chartData = [
  {
    percentage: "60%",
    label: "Vision",
    bgColor: "bg-[#8740ff]",
  },
  {
    percentage: "30%",
    label: "Innovation",
    bgColor: "bg-[#7422ff]",
  },
  {
    percentage: "10%",
    label: "Process",
    bgColor: "bg-[#5f00ff]",
  },
];

export const MacbookProMobile = (): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNavigationClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      console.log('Attempting to scroll to:', href, 'Element found:', targetElement);
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-[#050020] overflow-hidden w-full min-h-screen relative">
      {/* Background blur elements with breathing glow */}
      <div className="absolute top-[200px] right-[-100px] w-[300px] h-[300px] bg-[#f49fff1a] rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '0s', animationDuration: '4s' }} />
      <div className="absolute top-[800px] left-[-100px] w-[300px] h-[300px] bg-[#f49fff26] rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
      <div className="absolute top-[1400px] right-[-50px] w-[200px] h-[200px] bg-[#f49fff26] rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '3s', animationDuration: '4s' }} />

      {/* Hero background image */}
      <img
        className="absolute top-0 left-0 w-full h-[60vh] object-cover"
        alt="Milad fakurian"
        src="https://c.animaapp.com/mfyg1u8gOd3I3V/img/milad-fakurian-9xcvw544pwq-unsplash-1.png"
      />

      {/* Header */}
      <header className="relative z-10 p-4 flex justify-between items-center">
        <div className="[font-family:'Inter',Helvetica] font-black text-white text-2xl">
          Aura
        </div>
        
        <nav className="flex items-center gap-4">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleNavigationClick(e, item.href)}
              className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[normal] hover:text-white/80 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button className="bg-[#5f00ff] rounded-full px-6 py-2 hover:bg-[#5f00ff]/90 transition-colors overflow-hidden">
          <ShinyText 
            text="Contact" 
            disabled={false} 
            speed={3} 
            className="[font-family:'Inter',Helvetica] font-semibold text-sm"
          />
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-4 pt-16 pb-8 text-center">
        <TextType
          as="h1"
          text={["We are Aura."]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          loop={false}
          className="[font-family:'Inter',Helvetica] font-bold text-white text-4xl md:text-5xl mb-6 leading-tight"
        />

        <p className="[font-family:'Inter',Helvetica] font-semibold text-white text-lg md:text-xl mb-8 leading-relaxed">
          Your business deserves a<br /> website that sells.
        </p>
      </section>

      {/* Feature Cards with Stats */}
      <section className="px-4 py-8 space-y-6">
        {featureCards.map((card, index) => (
          <SpotlightCard
            key={index}
            className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${card.delay}] w-full h-auto min-h-[200px] flex flex-col justify-center items-center text-center`}
            spotlightColor="rgba(255, 255, 255, 0.15)"
          >
            <div className="[font-family:'Inter',Helvetica] font-bold text-[#8740ff] text-4xl md:text-5xl mb-4">
              {statsData[index].type === "percentage" ? (
                <>
                  <CountUp
                    from={0}
                    to={statsData[index].numericValue}
                    duration={2}
                    delay={0.3}
                    className="[font-family:'Inter',Helvetica] font-bold text-[#8740ff] inline-block"
                  />
                  <span>%</span>
                </>
              ) : statsData[index].type === "gradient" ? (
                <GradientText
                  colors={["#8E2DE2", "#6A11CB", "#9D50BB", "#6A11CB", "#8E2DE2"]}
                  animationSpeed={3}
                >
                  {statsData[index].value}
                </GradientText>
              ) : statsData[index].type === "ascii" ? (
                <span>♾️</span>
              ) : (
                <span>{statsData[index].value}</span>
              )}
            </div>
            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl md:text-2xl mb-2">
              {card.title}
            </h3>
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffbf] text-base leading-relaxed">
              {card.description}
            </p>
          </SpotlightCard>
        ))}
      </section>

      {/* Growth Section */}
      <section className="px-4 py-12 text-center">
        <TextType
          as="h2"
          text={["Designed for growth"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          loop={false}
          startOnVisible={true}
          className="[font-family:'Inter',Helvetica] font-bold text-white text-3xl md:text-4xl mb-4 leading-tight"
        />
        <TextType
          as="h3"
          text={["Built for freedom"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={false}
          cursorCharacter="|"
          loop={false}
          initialDelay={2000}
          startOnVisible={true}
          className="[font-family:'Inter',Helvetica] font-bold text-white text-3xl md:text-4xl mb-8 leading-tight"
        />

        <div className="mt-8"> {/* Added div wrapper with margin-top */}
          <VariableProximity
            label="At Aura, we believe the internet is not just a tool — it's a stage for dreams. We craft websites that empower businesses to be seen, heard, and remembered."
            className="[font-family:'Inter',Helvetica] font-bold text-[#ffffffbf] text-base md:text-lg leading-relaxed max-w-md mx-auto"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 700, 'opsz' 30"
            containerRef={containerRef}
            radius={80}
            falloff="exponential"
          />
        </div>
      </section>

      {/* Chart Section */}
      <section className="px-4 py-8">
        <div className="flex justify-center items-end space-x-4 h-64 mb-8">
          {chartData.map((item, index) => (
            <div key={index} className="flex flex-col items-center h-full justify-end">
              <div className="text-[#8740ff] text-xl font-semibold mb-2">
                {item.percentage}
              </div>
              <div 
                className={`w-12 ${item.bgColor} rounded-t-lg transition-all duration-1000 ease-out`}
                style={{ 
                  height: item.percentage === "60%" ? "150px" : 
                         item.percentage === "30%" ? "100px" : "60px" 
                }}
              />
              <div className="text-white text-xs font-bold mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aura Showcase Section */}
      <section id="aura-showcase" className="px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-white text-4xl md:text-5xl inline-block">
            <span>Aura </span>
            <GradientText
              colors={["#8E2DE2", "#6A11CB", "#9D50BB", "#6A11CB", "#8E2DE2"]}
              animationSpeed={3}
              className="inline-block"
            >
              Showcase.
            </GradientText>
          </h2>
        </div>

        <div style={{ height: '400px', position: 'relative', marginBottom: '3rem' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 py-8 text-center">
        <TrueFocus
          sentence="CONTACT US"
          blurAmount={5}
          borderColor="#8740ff"
          glowColor="rgba(135, 64, 255, 0.6)"
          animationDuration={0.8}
          pauseBetweenAnimations={1.5}
          className="[font-family:'Inter',Helvetica] font-extrabold text-white text-3xl md:text-4xl mb-6"
        />

        <div className="max-w-md mx-auto mb-8">
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              console.log(step);
            }}
            onFinalStepCompleted={() => console.log("All steps completed!")}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            <Step>
              <h2 className="text-white text-xl font-bold mb-4">Tell us about your project</h2>
              <p className="text-white/80 text-sm">Let's start with the basics of what you're looking for.</p>
            </Step>
            <Step>
              <h2 className="text-white text-xl font-bold mb-4">What's your budget?</h2>
              <p className="text-white/80 text-sm">This helps us tailor our services to your needs.</p>
            </Step>
            <Step>
              <h2 className="text-white text-xl font-bold mb-4">Contact information</h2>
              <Input placeholder="Your email" className="mt-4 bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            </Step>
            <Step>
              <h2 className="text-white text-xl font-bold mb-4">All set!</h2>
              <p className="text-white/80 text-sm">We'll get back to you within 24 hours.</p>
            </Step>
          </Stepper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-8 text-center">
        <TextType
          as="h2"
          text={["So, what are you waiting for?"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          loop={false}
          startOnVisible={true}
          className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl md:text-2xl mb-4 leading-tight"
        />
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-[#ffffff20]">
        <div className="text-center space-y-4">
          <div className="[font-family:'Paytone_One',Helvetica] font-normal text-white text-2xl">
            Aura.
          </div>

          <VariableProximity
            label="Mastering the internet, one website at a time."
            className="[font-family:'Inter',Helvetica] font-normal text-white text-base"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 600, 'opsz' 25"
            containerRef={containerRef}
            radius={70}
            falloff="linear"
          />

          <VariableProximity
            label="Team Conditional & Policy"
            className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffbf] text-sm"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 500, 'opsz' 20"
            containerRef={containerRef}
            radius={60}
            falloff="linear"
          />
        </div>
      </footer>
    </div>
  );
};
