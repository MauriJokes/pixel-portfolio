import React, { useState } from "react";
import AppIconSlider from "../components/AppIconSlider";
import Modal from "../components/Modal";
import Dropdown from "../components/Dropdown";
import CertSlider from "../components/CertSlider";
import { IoIosCloseCircle } from "react-icons/io";

interface AppIconModalChildrenProps {
  onClose: () => void;
  title: string;
  description: string;
  proficiency: number;
}

interface AppIconModalStateProps {
  title: string;
  description: string;
  proficiency: number;
}

// Children component for modal
const AppIconModalChildren: React.FC<AppIconModalChildrenProps> = ({
  onClose,
  title,
  description,
  proficiency,
}) => {
  return (
    <React.Fragment>
      <div className="relative flex flex-1 items-center justify-center rounded-2xl bg-[#2e2e2e] py-2 shadow-lg">
        <p className="font-montserrat text-center text-lg tracking-widest text-white/60">
          {title}
        </p>
        <IoIosCloseCircle
          onClick={onClose}
          className="absolute right-3 text-right text-2xl text-gray-500 hover:text-gray-700"
        />
      </div>
      <div className="mt-5 h-100 w-full flex-1 overflow-auto rounded-2xl bg-[#2e2e2e] p-5 shadow-lg">
        <p className="font-jet-brains text-white/60">{description}</p>
      </div>
      <div className="mt-10 flex items-center justify-between pr-2">
        <p className="font-monserrat tracking-widest text-white">Proficieny</p>
        {Array.from([1, 2, 3, 4, 5]).map((_, index) => {
          return (
            <div
              key={index}
              className={`h-5.5 w-5.5 rounded-2xl ${index < proficiency ? "bg-[#98c379]" : "bg-black"}`}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [page, setPage] = useState<string>("skills");
  const [modalState, setModalState] = useState<AppIconModalStateProps>({
    title: "",
    description: "",
    proficiency: 0,
  });

  function GenerateOptions() {
    switch (page) {
      case "skills":
        return [
          {
            label: "certificates",
            value: "certificates",
          },
        ];

      default:
        return [
          {
            label: "skills",
            value: "skills",
          },
        ];
    }
  }

  function GenerateSkillsBody() {
    switch (page) {
      case "skills":
        return (
          <React.Fragment>
            <AppIconSlider
              setIsModalOpen={setIsModalOpen}
              setModalState={setModalState}
            />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <AppIconModalChildren
                onClose={() => setIsModalOpen(false)}
                title={modalState.title}
                description={modalState.description}
                proficiency={modalState.proficiency}
              />
            </Modal>
          </React.Fragment>
        );

      default:
        return <CertSlider />;
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-start gap-6 overflow-hidden p-20 px-4">
      {/* Label */}
      <Dropdown label={page} options={GenerateOptions()} onSelect={setPage} />

      {/* Skills Body */}
      {GenerateSkillsBody()}
    </div>
  );
}
