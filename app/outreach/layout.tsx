import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outreach",
};

export default function OutreachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
