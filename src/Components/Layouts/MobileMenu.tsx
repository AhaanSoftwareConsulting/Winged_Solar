interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function MobileMenu({
  open,
  setOpen,
}: Props) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-all ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-screen w-[300px] bg-[#02162f] z-50 transition-all duration-300 ${
          open
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-end">
          <button
            onClick={() => setOpen(false)}
            className="text-white"
          >
            X
          </button>
        </div>

        <div className="flex flex-col px-6 gap-6">
          <a className="text-white">About</a>
          <a className="text-white">C&I Solar</a>
          <a className="text-white">EPC Advantages</a>
          <a className="text-white">
            Critical Infrastructure
          </a>
        </div>
      </div>
    </>
  );
}