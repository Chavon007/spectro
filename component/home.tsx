"use client";

import Link from "next/link";
import Slider from "react-slick";

const backgroundImage = [
  {
    bg: "/car.jpg",
  },
  {
    bg: "/jean.avif",
  },
  {
    bg: "/accessorie.avif",
  },
];

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider className="w-full mx-auto" {...settings}>
      {backgroundImage.map((image, index) => (
        <div
          key={index}
          className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full"
        >
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url('${image.bg}')`,
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center items-start p-8 md:p-16 max-w-4xl">
            <h3 className=" max-w-[500px] text-3xl md:text-5xl font-bold font-mulish text-white mb-4">
              Gear Up. Stand Out. Live Your Style.
            </h3>
            <p className=" max-w-[500px] text-sm md:text-base font-lora text-white mb-6 max-w-2xl">
              Whether you're looking to turn heads with the latest fashion,
              cruise in a car that matches your vibe, or accessorize every
              outfit to perfection, we've got you covered. Explore our
              collection of jeans, accessories, and vehicles designed for those
              who want to stand out every day.
            </p>
            <Link
              href="/categories"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-lora hover:bg-red-500 transition-colors"
            >
              Shop now
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Banner;
