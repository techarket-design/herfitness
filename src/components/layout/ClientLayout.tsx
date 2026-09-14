"use client";

import React, { useState, createContext, useContext } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FreeTrialModal } from "@/components/ui/FreeTrialModal";

interface ModalContextType {
  openModal: (branchSlug?: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export const useTrialModal = () => useContext(ModalContext);

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<string | undefined>();

  const openModal = (branchSlug?: string) => {
    setSelectedBranch(branchSlug);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <Navbar onOpenTrialModal={openModal} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FreeTrialModal
        isOpen={isOpen}
        onClose={closeModal}
        defaultBranchSlug={selectedBranch}
      />
    </ModalContext.Provider>
  );
}
