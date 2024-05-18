import { CardBody, CardContainer, CardItem } from "@/components/ui/card/ThreeDCardHelper";
import ShopifyIcon from "../icons/ShopifyIcon";
import ReactIcon from "../icons/ReactIcon"; 
import WebflowIcon from "../icons/WebflowIcon"; 
import AhrefsIcon from "../icons/AhrefsIcon";
import SurferSeoIcon from "../icons/SurferSeoIcon";
import ScreamingFrogIcon from "../icons/ScreamingFrogIcon";

interface ThreeDCardProps {
  techStack: string
}

export function ThreeDCard({ techStack }: ThreeDCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative border-black bg-gradient-to-r from-zinc-900 to-zinc-700 hover:from-purple-800 hover:to-violet-500 h-24 lg:h-28 lg:w-40 rounded-xl p-2 border flex flex-col items-center md:w-40">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {techStack}
        </CardItem>

        {techStack.toLowerCase() === "shopify" && (
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="mt-2"
          >
            <ShopifyIcon />
          </CardItem>
        )}

        {techStack.toLowerCase() === "react" && (
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="mt-2"
          >
            <ReactIcon />
          </CardItem>
        )}

        {techStack.toLowerCase() === "webflow" && (
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="mt-2"
          >
            <WebflowIcon />
          </CardItem>
        )}

        {techStack.toLowerCase() === "ahrefs" && (
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="mt-2"
          >
            <AhrefsIcon />
          </CardItem>
        )}

        {techStack.toLowerCase() === "screamingfrog" && (
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="mt-2"
          >
            <ScreamingFrogIcon />
          </CardItem>
        )}

        {techStack.toLowerCase() === "surferseo" && (
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="mt-2"
          >
            <SurferSeoIcon />
          </CardItem>
        )}

        <div className="flex justify-between items-center mt-20">
        </div>
      </CardBody>
    </CardContainer>
  );
}
