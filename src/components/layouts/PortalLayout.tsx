import Options from "@/components/globals/Options";
import ToasterProvider from "../globals/ToasterProvider";

const PortalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col font-nunito">
      <ToasterProvider />
      <Options />
      <main className="">{children}</main>
    </div>
  );
};

export default PortalLayout;
