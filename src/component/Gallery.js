import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import DefaultGallery from "./DefaultGallery";
import NaturalColor from "./NaturalColor";
import NaturalColorsQueen from "./NaturalColorsQueen";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function Gallery() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-row items-center justify-center">
        <h2 className="font-tertiary text-[52px] font-bold text-[#750321] pt-4 pb-2">
          - PHOTO GALLERY -
        </h2>
      </div>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          MAIN GALLERY
        </AccordionHeader>
        <AccordionBody>
          <DefaultGallery />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          NATURAL COLOR
        </AccordionHeader>
        <AccordionBody>
          <NaturalColor />
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Natural Colors (Drawing Queens)
        </AccordionHeader>
        <AccordionBody>
          <NaturalColorsQueen />
        </AccordionBody>
      </Accordion>
    </div>
  );
}
