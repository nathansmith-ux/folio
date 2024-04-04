import PlanningIcon from "../icons/PlanningIcon";
import CodingIcon from "../icons/CodingIcon";
import OptimizeIcon from "../icons/OptimizeIcon";
import LaunchIcon from "../icons/LaunchIcon";

function renderIcon(iconName: string) {
  switch (iconName) {
    case 'PlanningIcon':
      return <PlanningIcon />;
    case 'CodingIcon':
      return <CodingIcon />;
    case 'OptimizeIcon':
      return <OptimizeIcon />
    case 'LaunchIcon':
      return <LaunchIcon />
    case 'NextjsIcon':
      return
    case 'PrismaIcon':
      return
    case 'TailwindIcon':
      return
    case 'OpenAIIcon':
      return
    case 'SanityIcon':
      return
    case 'StripeIcon':
      return
    case 'ClerkIcon':
      return 
    default:
      return null;
  }
}

export default function CardIcon({ 
  header, description, icon 
}: { 
  header:string, 
  description:string,
  icon: string
}) {
  return (
    <div>
      <div className="w-full p-6 bg-orange-100 border border-black rounded-lg">
        {renderIcon(icon)}
          <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{header}</h3>
          <p className="mb-3 font-normal text-gray-500">{description}</p>
      </div>
    </div>
  )
}