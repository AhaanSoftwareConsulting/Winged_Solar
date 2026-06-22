import Header from "../Layouts/Header";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png"; 
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";


import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center overflow-hidden m-2 rounded-[10px] "
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      

      <div className="relative z-20">
        <Header />
        <div className="max-w-[1440px] mx-auto relative">
        <div className="relative px-4  md:px-6 lg:px-12 xl:px-[50px] pt-[200px]">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center rounded-full border border-[#147BB7] px-4 py-2 text-xs text-[#147BB7]">
                DEPLOYABLE SOLAR INFRASTRUCTURE
              </div>

              <h1 className="mt-6 text-white font-bold leading-tight text-4xl md:text-5xl lg:text-6xl font-heading">
                Deployable Solar <br/> Infrastructure for C&I, <br/> EPCs, and Critical Power
              </h1>

              <p className="mt-6 max-w-xl text-gray-300 leading-8">
                Winged Solar delivers factory-built solar, storage,
                and power + water platforms that deploy faster.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-row gap-6 lg:items-end">
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 items-center">
            {/* LEFT */}
            <div>
              <div className="flex flex-wrap gap-4 ">
                <button className="bg-[#F5A623] text-black font-semibold rounded-full px-7 py-5">
                  Explore the Platforms
                </button>

                <button className="border border-white/40 backdrop-blur-xl text-white rounded-full px-7 py-5">
                  Request A Deployment Consultation
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-row gap-6 lg:items-end">
              <FeatureBox
                icon={icon1}
                title="Approximately 1 MW"
                desc="in roughly 1.3 acres"
              />

              <FeatureBox
                icon={icon2}
                title="U.S. Fabricated Steel"
                desc="options available"
              />
            </div>
          </div>

          

          {/* Bottom Features */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-5 pb-12">
            <BottomCard
              icon={icon3}
              title="Factory-built structure"
            />

            <BottomCard
              icon={icon4}
              title="Reduced field construction"
            />

            <BottomCard
              icon={icon5}
              title="Solar + battery storage"
            />

            <BottomCard
              icon={icon6}
              title="Water from air integration"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

type FeatureProps = {
  icon: string;
  title: string;
  desc: string;
};

function FeatureBox({ icon, title, desc }: FeatureProps) {
  return (
    <div className="w-full max-w-md flex items-center gap-4 bg-white/10
backdrop-blur-sm
border
border-white/20
shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/20 rounded-2xl p-4">
      <div className="h-16 w-16 rounded-xl bg-[#24A0D5] flex items-center justify-center text-white">
        <img
    src={icon}
    alt={title}
    className="w-8 h-8 object-contain"
  />
      </div>

      <div>
        <h4 className="text-white font-semibold">
          {title}
        </h4>

        <p className="text-gray-300 text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
}

function BottomCard({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className=" bg-white/10
backdrop-blur-sm
border
border-white/20
shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-[#24A0D5] rounded-2xl p-6 flex items-center gap-4">
      <div className="h-14 w-14 bg-[#24A0D5] rounded-xl flex items-center justify-center text-white">
        <img
    src={icon}
    alt={title}
    className="w-8 h-8 object-contain"
  />
      </div>

      <h4 className="text-white font-medium">
        {title}
      </h4>
    </div>
  );
}