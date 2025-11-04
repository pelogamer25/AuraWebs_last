import React, { useRef, useCallback } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { SpotlightCard } from "../../components/ui/spotlight-card";
import TextType from "../../components/ui/TextType";
import VariableProximity from "../../components/ui/VariableProximity";
import CountUp from "../../components/ui/CountUp";
import GradientText from "../../components/ui/GradientText";
import ASCIIText from "../../components/ui/ASCIIText";
import TrueFocus from "../../components/ui/TrueFocus";
import CircularGallery from "../../components/ui/CircularGallery";
import Stepper, { Step } from "../../components/ui/Stepper";

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
  { value: "V.I.P", numericValue: 0, label: "Get quality.", delay: "400ms", type: "gradient", top: -100 },
  { value: "♾️", numericValue: 0, label: "Get Freedom.", delay: "600ms", type: "ascii" },
];

const chartData = [
  {
    percentage: "60%",
    label: "Vision",
    height: "h-[362px]",
    bgColor: "bg-[#8740ff]",
    top: "top-[1615px]",
    left: "left-[145px]",
    textTop: "top-[1430px]",
    textLeft: "left-[156px]",
    labelTop: "top-[1575px]",
    labelLeft: "left-[206px]",
  },
  {
    percentage: "30%",
    label: "Innovation",
    height: "h-[237px]",
    bgColor: "bg-[#7422ff]",
    top: "top-[1740px]",
    left: "left-[344px]",
    textTop: "top-[1561px]",
    textLeft: "left-[344px]",
    labelTop: "top-[1690px]",
    labelLeft: "left-[380px]",
  },
  {
    percentage: "10%",
    label: "Process",
    height: "h-[151px]",
    bgColor: "bg-[#5f00ff]",
    top: "top-[1826px]",
    left: "left-[543px]",
    textTop: "top-[1654px]",
    textLeft: "left-[543px]",
    labelTop: "top-[1781px]",
    labelLeft: "left-[588px]",
  },
];


export const MacbookPro = (): JSX.Element => {
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
    <div
      ref={containerRef}
      className="bg-[#050020] overflow-hidden w-full min-w-[1728px] h-[4300px] relative"
      data-model-id="0:3"
      style={{ position: 'relative' }}
    >
      {/* Background blur elements with breathing glow */}
      <div className="absolute top-[3828px] left-[1459px] w-[718px] h-[718px] bg-[#f49fff1a] rounded-[359px] blur-[125px] animate-pulse-glow" style={{ animationDelay: '0s', animationDuration: '4s' }} />
      <div className="absolute top-[2424px] -left-10 w-[718px] h-[718px] bg-[#f49fff26] rounded-[359px] blur-[125px] animate-pulse-glow" style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
      <div className="absolute top-[1781px] left-[1533px] w-[525px] h-[525px] bg-[#f49fff26] rounded-[262.5px] blur-[125px] animate-pulse-glow" style={{ animationDelay: '3s', animationDuration: '4s' }} />

      {/* Hero background image */}
      <img
        className="absolute top-0 left-0 w-full h-[1141px] object-cover"
        alt="Milad fakurian"
        src="https://c.animaapp.com/mfyg1u8gOd3I3V/img/milad-fakurian-9xcvw544pwq-unsplash-1.png"
      />

      {/* Header */}
      <header className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] relative z-50">
        <img
          className="absolute top-[45px] left-[calc(50.00%_-_814px)] w-[1620px] h-[101px]"
          alt="Rectangle"
          src="https://c.animaapp.com/mfyg1u8gOd3I3V/img/rectangle-3.svg"
        />

        <div className="absolute top-[75px] left-[180px] [font-family:'Inter',Helvetica] font-black text-white text-[32px] tracking-[0] leading-[normal]">
          Aura
        </div>

        <nav className="absolute top-[81px] left-1/2 transform -translate-x-1/2 flex items-center gap-8">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => handleNavigationClick(e, item.href)}
              className="[font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal] hover:text-white/80 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button className="absolute top-[75px] left-[1383px] w-[205px] h-[58px] bg-[#5f00ff] rounded-[28px] hover:bg-[#5f00ff]/90 transition-colors h-auto">
          <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal]">
            Contact
          </span>
        </Button>
      </header>

      {/* Hero Section */}
      <section className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <div className="absolute w-full top-[450px] left-0 text-center">
          <TextType
            as="h1"
            text={["We are Aura."]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            loop={false}
            className="[font-family:'Inter',Helvetica] font-bold text-white text-8xl tracking-[0] leading-[normal]"
          />
        </div>

        <div className="absolute top-[561px] left-[calc(50.00%_-_202px)] [font-family:'Inter',Helvetica] font-semibold text-white text-[32px] text-center tracking-[0] leading-[normal]">
          Your business deserves a<br /> website that sells.
        </div>

        
      </section>

      {/* Feature Cards with Stats */}
      <section className="flex justify-center gap-8 absolute top-[800px] left-[calc(50.00%_-_719px)]">
        {featureCards.map((card, index) => (
					<SpotlightCard
					  key={index}
					  className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${card.delay}] w-[447px] h-[337px] flex flex-col justify-center items-center text-center`}
					  spotlightColor="rgba(255, 255, 255, 0.15)"
					  style={card.title === "Get Freedom." ? { position: "relative", top: "-20px" } : {}}
					>
            <div className="[font-family:'Inter',Helvetica] font-bold text-[#8740ff] text-6xl tracking-[0] leading-[normal] whitespace-nowrap mb-6">
              {statsData[index].type === "percentage" ? (
                <>
                  <CountUp
                    from={0}
                    to={statsData[index].numericValue}
                    duration={2}
                    delay={0.5}
                    className="[font-family:'Inter',Helvetica] font-bold text-[#8740ff] text-6xl"
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
                <div className="w-[800px] h-[225px] relative mx-auto">
                  <ASCIIText
                    text="♾️"
                    enableWaves={true}
                    asciiFontSize={1}
                    textFontSize={1000}
                    planeBaseHeight={8}
                  />
                </div>
              ) : (
                <span>{statsData[index].value}</span>
              )}
            </div>
						<h3
						  className="[font-family:'Inter',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-[38px] whitespace-nowrap mb-4"
						  style={card.title === "Get Freedom." ? { transform: "translateY(-75px)" } : {}}
						>
						  {card.title}
						</h3>

						<VariableProximity
						  label={card.description}
						  className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffbf] text-lg tracking-[0] leading-[22.0px]"
						  style={card.title === "Get Freedom." ? { transform: "translateY(-75px)" } : {}}
						  fromFontVariationSettings="'wght' 400, 'opsz' 9"
						  toFontVariationSettings="'wght' 700, 'opsz' 40"
						  containerRef={containerRef}
						  radius={100}
						  falloff="linear"
						/>
          </SpotlightCard>
        ))}
      </section>

      {/* Growth Section */}
      <section className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <div className="absolute top-[1422px] left-[850px] w-[584px] h-48 flex flex-col gap-[30px]">
          <TextType
            as="h2"
            text={["Designed for growth"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            loop={false}
            className="w-[580px] h-[71px] [font-family:'Inter',Helvetica] font-bold text-white text-[58px] tracking-[0] leading-[70.8px] whitespace-nowrap"
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
          className="ml-[65px] w-[481px] h-[91px] [font-family:'Inter',Helvetica] font-bold text-white text-[58px] tracking-[0] leading-[70.8px]"
        />
        </div>

        <div className="absolute top-[1750px] left-[837px] w-[667px] rotate-[-0.01deg]">
          <VariableProximity
            label="At Aura, we believe the internet is not just a tool — it's a stage for dreams. We craft websites that empower businesses to be seen, heard, and remembered."
            className="[font-family:'Inter',Helvetica] font-bold text-[#ffffffbf] text-2xl tracking-[0] leading-[47.3px]"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 800, 'opsz' 40"
            containerRef={containerRef}
            radius={120}
            falloff="exponential"
          />
        </div>
      </section>

      {/* Chart Section */}
      <section className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
        {chartData.map((item, index) => (
          <div key={index}>
            {/* Background bars */}
            <div
              className={`absolute ${item.top.replace("top-[1615px]", "top-[1551px]").replace("top-[1740px]", "top-[1671px]").replace("top-[1826px]", "top-[1762px]")} ${item.left} w-[199px] ${item.height.replace("h-[362px]", "h-[426px]").replace("h-[237px]", "h-[306px]").replace("h-[151px]", "h-[215px]")} bg-[#d1b7ff26] ${index === 0 ? "rounded-[22px_22px_0px_22px]" : index === 1 ? "rounded-[22px_22px_0px_0px]" : "rounded-[22px_22px_22px_0px]"}`}
            />

            {/* Colored bars */}
            <div
              className={`absolute ${item.top} ${item.left} w-[199px] ${item.height} ${item.bgColor} ${index === 0 ? "rounded-[22px_22px_0px_22px]" : index === 1 ? "rounded-[22px_22px_0px_0px]" : "rounded-[22px_22px_22px_0px]"}`}
            />

            {/* Percentage text */}
            <div
              className={`${item.textTop} ${item.textLeft} absolute [font-family:'Inter',Helvetica] font-semibold text-[#8740ff] text-8xl tracking-[0] leading-[117.1px] whitespace-nowrap`}
            >
              {item.percentage}
            </div>

            {/* Label text */}
            <div
              className={`absolute ${item.labelTop} ${item.labelLeft} [font-family:'Inter',Helvetica] font-extrabold text-white text-2xl tracking-[0] leading-[29.3px] whitespace-nowrap`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </section>

      {/* Aura Showcase Section */}
      <section id="aura-showcase" className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]">
        <div className="absolute top-[2138px] left-[calc(50%_-_480px)] text-center">
          <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-white text-9xl tracking-[0] leading-[156.2px] whitespace-nowrap">
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

        <div className="absolute top-[2400px] left-[calc(50%_-_800px)] w-[1600px]" style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>
      </section>

      {/* Contact Section */}
      <section className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms]">
        <div className="absolute top-[2550px] left-[calc(50%_-_425px)] w-[850px] text-center">
          <TrueFocus
            sentence="CONTACT US"
            blurAmount={5}
            borderColor="#8740ff"
            glowColor="rgba(135, 64, 255, 0.6)"
            animationDuration={0.8}
            pauseBetweenAnimations={1.5}
            className="[font-family:'Inter',Helvetica] font-extrabold text-white text-9xl tracking-[0] leading-[156.2px] whitespace-nowrap"
          />
        </div>

        <div className="absolute top-[2765px] left-[calc(50.00%_-_722px)] w-[1444px]">
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
              <h2 className="text-white text-2xl font-bold mb-4">Tell us about your project</h2>
              <p className="text-white/80">Let's start with the basics of what you're looking for.</p>
            </Step>
            <Step>
              <h2 className="text-white text-2xl font-bold mb-4">What's your budget?</h2>
              <p className="text-white/80">This helps us tailor our services to your needs.</p>
            </Step>
            <Step>
              <h2 className="text-white text-2xl font-bold mb-4">Contact information</h2>
              <Input placeholder="Your email" className="mt-4 bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            </Step>
            <Step>
              <h2 className="text-white text-2xl font-bold mb-4">All set!</h2>
              <p className="text-white/80">We'll get back to you within 24 hours.</p>
            </Step>
          </Stepper>
        </div>
      </section>

      {/* CTA Section - Moved and simplified */}
      <section className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms]">
        <div className="absolute top-[2730px] left-[calc(50.00%_-_408px)] w-[815px] text-center">
          <TextType
            as="h2"
            text={["So, what are you waiting for?"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            loop={false}
            startOnVisible={true}
            className="[font-family:'Inter',Helvetica] font-semibold text-white text-[55px] tracking-[0] leading-[67.1px]"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2000ms]">
        <div className="absolute top-[3778px] left-[95px] [font-family:'Paytone_One',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal]">
          Aura.
        </div>

        <div className="absolute top-[3866px] left-[95px] w-[586px]">
          <VariableProximity
            label="Mastering the internet, one website at a time."
            className="[font-family:'Inter',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[32.4px]"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 600, 'opsz' 25"
            containerRef={containerRef}
            radius={90}
            falloff="linear"
          />
        </div>

        <div className="absolute top-[3917px] left-[95px] w-[359px]">
          <VariableProximity
            label="Team Conditional & Policy"
            className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffbf] text-2xl tracking-[0] leading-[32.4px]"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 500, 'opsz' 20"
            containerRef={containerRef}
            radius={70}
            falloff="linear"
          />
        </div>

        <img
          className="absolute top-[4091px] left-[calc(50.00%_-_654px)] w-[1307px] h-px object-cover"
          alt="Line"
          src="https://c.animaapp.com/mfyg1u8gOd3I3V/img/line-2.svg"
        />
      </footer>

      {/* Hidden/Empty elements from original */}
      <div className="top-[1615px] left-[387px] font-normal text-white text-2xl leading-[29.3px] whitespace-nowrap absolute [font-family:'Inter',Helvetica] tracking-[0]">
        {""}
      </div>
    </div>
  );
};
