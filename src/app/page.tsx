"use client";

import { LoggedUserProvider } from "@/contexts/LoggedUser";
import Header from "../components/Header";

export default function Home() {
  return (
    <LoggedUserProvider>
      <Header />
    </LoggedUserProvider>
  );
}
