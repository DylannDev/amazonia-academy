import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

const ImageModal = ({
  isOpen,
  onClose,
  imageSrc,
}: {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}) => {
  // Désactiver le scroll lorsque la modal est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Réactiver le scroll lors de la fermeture
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-white bg-opacity-20 backdrop-blur-sm"
      onClick={handleClickOutside}
    >
      <div className="relative">
        <motion.button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-red-500 rounded-full"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          <IoClose className="text-white text-xl" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full max-w-4xl max-h-4xl"
        >
          <Image
            src={imageSrc}
            alt="Expanded image"
            width={1000}
            height={1000}
            className="object-cover rounded-3xl"
          />
        </motion.div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.getElementById("modal-root")!);
};

export default ImageModal;
