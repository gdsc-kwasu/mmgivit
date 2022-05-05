import React from "react";
import Link from "next/link";
import { MissionContent } from "@layout/Mission/style/mission.styled";

const MISSIONS = [
  { image: "/images/img-1.png", text: "Our Work" },
  { image: "/images/img-2.png", text: "Become a Volunteer" },
  { image: "/images/img-3.png", text: "Donate" },
];

const Mission = () => {
  return (
    <MissionContent>
      {MISSIONS.map((items, index) => (
        <Link key={index} href="#" passHref>
          <div
            style={{
              backgroundImage: ` url(${items.image}) `,
            }}
            className="missions"
          >
            {items.text}
          </div>
        </Link>
      ))}
    </MissionContent>
  );
};

export default Mission;
