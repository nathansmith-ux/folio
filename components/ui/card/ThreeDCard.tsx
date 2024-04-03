import { CardBody, CardContainer, CardItem } from "@/components/ui/card/ThreeDCardHelper";
import ShopifyIcon from "../icons/ShopifyIcon";
import ReactIcon from "../icons/ReactIcon"; // Import for React icon
import WebflowIcon from "../icons/WebflowIcon"; // Import for Webflow icon

export function ThreeDCard({ techStack }: { techStack: string }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative border-black bg-white h-24 lg:h-28 lg:w-40 rounded-xl p-2 border flex flex-col items-center md:w-40">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600"
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

        <div className="flex justify-between items-center mt-20">
        </div>
      </CardBody>
    </CardContainer>
  );
}
