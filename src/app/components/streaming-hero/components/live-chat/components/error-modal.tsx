import { Button } from "@/components/ui/button";

export const ErrorModal = ({
  message,
  closeModal,
}: {
  message: string;
  closeModal: () => void;
}) => (
  <div
    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
    onClick={closeModal}
  >
    <div className="bg-black/60 p-4 rounded shadow-lg text-white w-[300px] text-center">
      <p>{message}</p>
      <Button className="mt-2" onClick={closeModal}>
        Close
      </Button>
    </div>
  </div>
);
