import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col gap-3">
      <div className="Section-title">
        <h3 className="title">
          <span className="name">
            {/* The <span className="text-green-500">Then</span> Mind */}I don't
            understand!!! Could you{" "}
            <span className="text-green-500">Explain </span>it in{" "}
            <span className="text-green-500">Different Way</span> —
          </span>
        </h3>
      </div>
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <p className="text-[18px] uppercase font-bold">🏝️ IDU-CYEIIDW</p>
        </Link>
        <Link href={"/"} className="grid grid-cols-profile gap-6 items-center">
          <span className="w-[40px] h-[40px] rounded-full bg-[#732bf7]"></span>
          <div className="flex flex-col justify-center">
            <h3 className="uppercase text-xl font-bold">
              <span className="lowercase text-[12px] font-normal">by</span> Ra
              Ju
            </h3>
            <p className="text-gray-600 text-[14px] -translate-y-1">
              @obsession
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
