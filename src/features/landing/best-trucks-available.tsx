import Image from "next/image";
import React from "react";

export default function BestTrucksAvailable() {
  return (
    <section className="">
      <div className="bg-transparent relative w-full ">
        <div className="absolute h-[300px] w-full bg-black py-10">
          <div className="container w-full">
            <p className="font-bold mb-3 text-primary text-center">GALLERY</p>
            <h1 className="text-center mb-10 text-3xl sm:text-4xl text-white">
              Best <span className="fancy">trucks</span> in our{" "}
              <span className="underlined underline-mask">lineup</span>
            </h1>
          </div>
        </div>
        <div className="container w-full pt-44 pb-10">
          {/* <div className="absolute px-4 grid grid-cols-2 overflow-x-hidden md:grid-cols-4 gap-4 -translate-x-1/2 left-1/2 max-w-[1200px] w-full"> */}
          <div className="px-4 grid grid-cols-2 overflow-x-hidden md:grid-cols-4 gap-4 max-w-[1200px] w-full mx-auto">
            <div data-aos="flip-up" data-aos-delay="300" className="grid gap-4">
              <div>
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  className="h-full object-cover max-w-full rounded-lg"
                  src="https://www.sinotrucknigeria.com/wp-content/uploads/2018/02/HOWO-Cargo-Truck-1-400x267.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  className="h-full object-cover max-w-full rounded-lg"
                  src="https://www.sinotrucknigeria.com/wp-content/uploads/2018/02/HOWO-Stake-Cargo-Truck-3-400x267.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  className="h-full object-cover max-w-full rounded-lg"
                  src="https://www.sinotrucknigeria.com/wp-content/uploads/2018/02/HOWO-Light-Van-Truck-3-400x267.jpg"
                  alt=""
                />
              </div>
            </div>
            <div data-aos="flip-up" data-aos-delay="400" className="grid gap-4">
              <div>
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  className="h-full object-cover max-w-full rounded-lg"
                  src="https://www.sinotrucknigeria.com/wp-content/uploads/2018/02/HOWO-Water-Tank-Truck-1-400x267.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  className="h-full object-cover max-w-full rounded-lg"
                  src="https://www.howosinotruk.com/Uploads/products/2021-12-30/-howo-371hp-6x4-U-shape-dump-truck--4-.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  className="h-full object-cover max-w-full rounded-lg"
                  src="https://www.truckmanauto.com/Uploads/image/products/en_20191024091202_511.jpg"
                  alt=""
                />
              </div>
            </div>
            <div data-aos="flip-up" data-aos-delay="500" className="grid gap-4">
              <div>
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  className="h-full object-cover max-w-full rounded-lg"
                  src="https://www.sinoheavyvehicles.com/pic/big/506_0.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  className="h-full object-cover max-w-full rounded-lg"
                  src="https://www.howosinotruk.cn/data/attachment/202307/25/428009b1fa787bf57ade905f3fabb835.JPG"
                  alt=""
                />
              </div>
              <div>
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  className="h-full object-cover max-w-full rounded-lg"
                  src="https://www.truckcnhtc.com/uploads/202319912/howo-trucks-sinotruk-heavy-duty-tract-truck6c727a48-444a-441d-a870-d90c24eb4612.jpg"
                  alt=""
                />
              </div>
            </div>
            <div data-aos="flip-up" data-aos-delay="600" className="grid gap-4">
              <div>
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  className="h-full object-cover max-w-full rounded-lg"
                  src="https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2017/08/DAF_truck_in_Nigeria-e1501611545127.jpg?fit=800%2C532&ssl=1"
                  alt=""
                />
              </div>
              <div>
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  className="h-full object-cover max-w-full rounded-lg"
                  src="https://media.cnn.com/api/v1/images/stellar/prod/200410095440-kobo360-truck-driver.jpg?q=w_2275,h_1391,x_0,y_0,c_fill"
                  alt=""
                />
              </div>
              <div>
                <Image
                  unoptimized
                  width={800}
                  height={800}
                  className="h-full object-cover max-w-full rounded-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8EdeVIwS-0b8yJlY6ZA-6YdIEqwkkF7LPbN_-Dkn4-Q3clhVud5IlsxBkT7T3y1WWzk&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
