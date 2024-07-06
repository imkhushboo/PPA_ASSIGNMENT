"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

type StatsCardProps = {
  title: string;
  value: number;
  imgUrl: string;
};

const StatCard = ({ title, value, imgUrl }: StatsCardProps) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(title);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [title]);

  return (
    <div className="stat-card" id={title}>
      <Image src={imgUrl} width={50} height={50} alt={title} />
      <h2 className="stat-title">{title}</h2>
      <p className="stat-value">
        {inView && (
          <CountUp start={0} end={value} duration={2.5} separator="," />
        )}
      </p>
    </div>
  );
};

export default StatCard;
