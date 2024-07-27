import React from "react";
import Image from "next/image";

export default function TruckGallery() {
  const Trucks: string[] = [
    "https://cdn.britannica.com/17/126517-050-9CDCBDDF/semi-semitrailer-truck-tractor-highway.jpg", // Example truck image URL
    "https://media.istockphoto.com/id/153700564/photo/trucks-unloading-and-loading-at-warehouse.jpg?s=612x612&w=0&k=20&c=6N99r6KZIkpbMcB_DhIfR1j7JVxYFOD3XDTKut1IvZQ=", // Example truck image URL
    "https://images.contentstack.io/v3/assets/blte891c850d5781579/blt53faefb3dffea48c/6452c0632beffe356089eb86/why-is-it-called-a-semi-truck.jpg", // Example truck image URL
    "https://www.topmarkfunding.com/wp-content/uploads/2019/10/what-is-a-semi-truck.jpg", // Example truck image URL
    "https://marvel-b1-cdn.bc0a.com/f00000000295579/www.tecequipment.com/app/uploads/2020/10/Volvo-Semi-Truck-900x436.jpg", // Example truck image URL
    "https://media.istockphoto.com/id/1445074332/photo/bright-colorful-big-rigs-semi-trucks-with-semi-trailers-standing-in-the-row-on-truck-stop.jpg?s=612x612&w=0&k=20&c=N5fVLeFT119Yv0QSH2Z9UgDXFOLW1qXHqL0p7EPkPRs=", // Example truck image URL
    "https://media.istockphoto.com/id/822253728/photo/two-big-rigs-semi-trucks-in-blue-tone-and-different-models-with-trailerd-driving-side-by-side.jpg?s=612x612&w=0&k=20&c=uZvsOwVvyLarafxWrfpAKcAvpSP2adM9VXeQ_3u3bqI=", // Example truck image URL
    "https://i.pinimg.com/736x/ac/24/b2/ac24b28fe326a62ce99dd193c790f908.jpg", // Example truck image URL
    "https://d11r79utqzj4rk.cloudfront.net/blog/trucking-company-without-driving/Semi-Truck-Desktop-Pictures.jpg", // Example truck image URL
    "https://www.shutterstock.com/image-photo/truck-freight-transportation-600nw-231380149.jpg", // Example truck image URL
  ];
  function renderImage() {
    const imageElements: JSX.Element[] = Trucks.map((_, index) => {
      return (
        <Image
          key={index}
          height={400}
          width={400}
          unoptimized
          src={_}
          alt=""
          className="max-w-[400px] max-h-[400px] min-w-[400px] min-h-[400px] object-cover"
        />
      );
    });

    return imageElements;
  }

  function renderSlider(): React.JSX.Element[] {
    const sliderItems = [];

    for (let i = 0; i < 2; i++) {
      sliderItems.push(
        <div
          key={i}
          className="container flex justify-between items-center gap-10 infinite-slide"
        >
          {renderImage()}
        </div>
      );
    }

    return sliderItems;
  }

  return (
    <div className="flex gap-[800px] m-auto w-full relative overflow-hidden infinite-slide-parent">
      {renderSlider()}
    </div>
  );
}
