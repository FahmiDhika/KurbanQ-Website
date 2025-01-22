"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Item } from "@/components/keunggulan";
import { FilteringButton } from "@/components/button/filtering";

import mainImage from "@/public/landingImage.svg";
import domba from "@/public/domba.svg";
import sapi from "@/public/sapi.svg";
import kambing from "@/public/kambing.svg";

import keunggulan1 from "@/public/keunggulan1.svg";
import keunggulan2 from "@/public/keunggulan2.svg";
import keunggulan3 from "@/public/keunggulan3.svg";

import logoFilterDomba from "@/public/logoDomba.png";
import logoFilterSapi from "@/public/logoSapi.png";
import logoFilterKambing from "@/public/logoKambing.png";

export default function Dashboard() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);

  return (
    // image carousel
    <>
      <div className="embla pl-80 mb-10" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image src={mainImage} alt="" className="imageLandingpage"></Image>
          </div>
          <div className="embla__slide">
            <Image src={domba} alt="" className="imageLandingpage"></Image>
          </div>
          <div className="embla__slide">
            <Image src={sapi} alt="" className="imageLandingpage"></Image>
          </div>
          <div className="embla__slide">
            <Image src={kambing} alt="" className="imageLandingpage"></Image>
          </div>
        </div>
      </div>

      <div className="flex mb-32">
        <Item
          title="Layanan Praktis"
          description="Bisa pesan online di website QurbanQ"
          icon={keunggulan1}
        />
        <Item
          title="Hewan Berkualitas"
          description="Kesehatan terjaga dengan baik"
          icon={keunggulan2}
        />
        <Item
          title="Pelayanan Cepat"
          description="Langsung sat set wat wet"
          icon={keunggulan3}
        />
      </div>

      <div className="flex w-full justify-evenly">
        <Image src={domba} alt="" width={400}></Image>
        <Image src={sapi} alt="" width={400}></Image>
        <Image src={kambing} alt="" width={400}></Image>
      </div>

      <h1 className="pl-14 w-full text-4xl font-bold my-24">Hewan Kurban</h1>

      <div className="w-full pl-14 flex gap-10 justify-start">
        <FilteringButton
          label="Domba"
          classname=""
          icon={logoFilterDomba}
          onClick={() => {
            window.location.href = "";
          }}
        />
        <FilteringButton
          label="Sapi"
          classname="bg-white"
          icon={logoFilterSapi}
          onClick={() => {
            window.location.href = "";
          }}
        />
        <FilteringButton
          label="Kambing"
          classname="bg-white"
          icon={logoFilterKambing}
          onClick={() => {
            window.location.href = "";
          }}
        />
      </div>

      <div className="">

      </div>
    </>
  );
}
