import in1 from "../../assets/in1.png";
import in2 from "../../assets/in2.png";
import in3 from "../../assets/in3.png";
import in4 from "../../assets/in4.png"; 
import in5 from "../../assets/in5.png";
import in6 from "../../assets/in6.png";
import grid1 from "../../assets/grid1.png";
import grid2 from "../../assets/grid2.png";
import arrow from "../../assets/arrow.png";
import step1 from "../../assets/step1.png";
import step2 from "../../assets/step2.png";
import step3 from "../../assets/step3.png";
import step4 from "../../assets/step4.png";
import React from "react";

export default function Factory() {
    const steps = [
  { icon: step1, title: "Build" },
  { icon: step2, title: "Ship" },
  { icon: step3, title: "Deploy" },
  { icon: step4, title: "Power" },
];
  return (
    <div className="bg-[#F6F6F6]">
        <div className="max-w-[1440px] mx-auto relative px-4  md:px-6 lg:px-12 xl:px-[60px] py-[90px]">
        <div className="relative justify-center items-center ">
            <h1 className="text-xl md:text-3xl lg:text-4xl text-[#0B2744] leading-snug text-center font-heading">
             Factory-built solar infrastructure. <br className="hidden lg:block"/>Deployed like equipment.
            </h1>
            <p className="text-[#1a1f24] leading-snug text-xs lg:text-base text-center mt-4 ">
              Winged Solar shifts repeatable structure work out of the field and into a controlled manufacturing environment. Instead <br className="hidden lg:block"/> of building every project from scratch on-site, the system arrives as a pre-engineered platform that can be placed, deployed, <br/> connected, monitored, and expanded.
            </p>
        </div>

          <div  className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">
            {/* Bottom Features */}
          <div className="relative rounded-[20px] ">
            <img src={grid1} alt="" className="w-full h-auto object-cover" />
          </div>

          {/* Bottom Features */}
          <div className="grid grid-cols-1 border border-[#24A0D580] gap-4 p-5 rounded-[20px] ">
            <BottomCard
              icon={in1}
              title="Factory-built repeatability"
            />

            <BottomCard
              icon={in2}
              title="Reduced site disruption"
            />

            <BottomCard
              icon={in3}
              title="Reduced trenching and concrete requirements in many configurations"
            />

            <BottomCard
              icon={in4}
              title="No heavy equipment required in many deployments"
            />
            <BottomCard
              icon={in5}
              title="Scalable from single unit to multi-unit microgrid"
            />

            <BottomCard
              icon={in6}
              title="Permanent, semi-permanent, or redeployable configurations"
            />
          </div>

          {/* Bottom Features */}
          <div className="relative rounded-[20px] ">
            <img src={grid2} alt="" className="w-full h-auto object-cover" />
          </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 lg:gap-6 mt-12">
  {steps.map((step, index) => (
    <React.Fragment key={index}>
      <div className="flex items-center gap-4">
        <div className="bg-[#E9F3FF] rounded-full w-[50px] h-[50px] xl:w-[103px] xl:h-[103px] shrink-0 flex items-center justify-center animate-float">
          <img
            src={step.icon}
            alt={step.title}
            className="w-6 h-6 xl:w-[75px] xl:h-[75px]"
          />
        </div>

        <p className="text-lg lg:text-3xl text-[#003374] font-heading">
          {step.title}
        </p>
      </div>

      {index < steps.length - 1 && (
        <img
          src={arrow}
          alt=""
          className="rotate-90 sm:rotate-0 w-8 h-8 xl:w-[50px] xl:h-[50px] shrink-0"
        />
      )}
    </React.Fragment>
  ))}
</div>
        </div>
       </div>
    )};

function BottomCard({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 lg:gap-5">
      <div className="w-14 h-14 md:h-16 md:w-16 shrink-0 bg-[#003374] rounded-xl flex items-center justify-center text-white">
        <img
    src={icon}
    alt={title}
    className="w-8 h-8 md:w-[47px] md:h-[47px] object-contain"
  />
      </div>

      <p className=" font-semibold text-[#1A1F24] text-xs lg:text-base">
        {title}
      </p>
    </div>
  );
}