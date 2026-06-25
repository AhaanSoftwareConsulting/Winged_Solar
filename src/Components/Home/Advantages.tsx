
interface AdvantagesProps {
  title: string;
  description: string;
  image: string;
  benefits: string[];
}



export default function Advantages({
  title,
  description,
  image,
  benefits,
}: AdvantagesProps) {
  return (
    <section className="bg-[#F6F6F6]">
      <div className="max-w-[1440px] mx-auto relative px-4 md:px-6 lg:px-10 xl:px-[60px] py-16 xl:py-[90px]">
        <div className="grid sm:grid-cols-12 gap-10 items-center">
         
          {/* Left Image */}
          <div className="relative rounded-[20px] w-full h-1/2 lg:h-full sm:col-span-5 lg:col-span-6">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover "
            />
          </div>

          {/* Right Content */}
          <div className="relative sm:col-span-7 lg:col-span-6">
            <h2 className="text-[#0A2A52] text-xl lg:text-2xl xl:text-[35px] leading-snug font-heading">
              {title}
            </h2>

            <p className="mt-6 text-[#404040] text-sm lg:text-base  leading-snug max-w-[650px]">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-2">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <span className="min-w-[16px] h-[16px] rounded-full bg-[#24A0D5] mt-1" />

                  <p className="text-[#172033] text-xs xl:text-lg font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-[#F5A623] text-black font-semibold rounded-full px-7 py-3 xl:py-5 cursor-pointer hover:bg-transparent hover:border hover:border-[#F5A623] hover:text-[#F5A623]">
                  Explore EPC Advantages
                </button>
          </div>

        </div>
      </div>
    </section>
  );
}