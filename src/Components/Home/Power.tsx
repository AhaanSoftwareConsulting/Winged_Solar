
interface PowerProps {
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  image: string;
  
}



export default function Power({
  title1,
  title2,
  description1,
  description2,
  image,

}: PowerProps) {
  return (

      <div className="max-w-[1440px] mx-auto relative px-4 md:px-6 lg:px-10 xl:px-[60px] py-16 xl:py-[90px]">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
          <div>
            <h2 className="text-[#0A2A52] text-lg md:text-xl xl:text-[35px] font-heading leading-snug">
              {title1}

            </h2>
            <h2 className="text-[#0A2A52] text-xl md:text-2xl xl:text-[35px] font-heading leading-snug">
              {title2}

            </h2>

            <p className="mt-6 text-[#404040] text-sm lg:text-base leading-snug max-w-[650px]">
              {description1}
            </p>
            <p className="mt-6 text-[#404040] text-sm lg:text-base leading-snug max-w-[650px]">
              {description2}
            </p>

            <button className="mt-10 bg-[#F5A623] text-black font-semibold rounded-full px-7 py-3 xl:py-5 cursor-pointer hover:bg-transparent hover:border hover:border-[#F5A623] hover:text-[#F5A623]">
                  Learn About Power + Water
                </button>
          </div>
         
          {/* Right Image */}
          <div>
            <img
              src={image}
              alt={title1}
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>         

        </div>
      </div>
  
  );
}