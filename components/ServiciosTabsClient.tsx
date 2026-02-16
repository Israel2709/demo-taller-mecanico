"use client";

import { useState } from "react";
import { Tabs } from "./ui/Tabs";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export function ServiciosTabsClient({ items }: { items: TabItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  return (
    <Tabs
      items={items}
      activeId={activeId}
      onChange={setActiveId}
    />
  );
}
