import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { PLASMIC } from "../lib/plasmic-init";  // Adjust the path if necessary

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      {children} {/* Plasmic components will be rendered here */}
    </PlasmicRootProvider>
  );
}
