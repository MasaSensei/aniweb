import Link from "next/link";

export default function AlphabetBar({
  selectedLetter,
}: {
  selectedLetter?: string;
}) {
  // Membuat array ["A", "B", "C", ..., "Z"]
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 my-8">
      {/* Tombol All / # */}
      <Link
        href="/alphabet"
        className={`w-10 h-10 flex items-center justify-center rounded-lg font-black transition-all border ${
          !selectedLetter
            ? "bg-onkyo-primary border-onkyo-primary text-white shadow-[0_0_15px_#FF007F]"
            : "bg-onkyo-nav border-onkyo-secondary/20 text-onkyo-muted hover:border-onkyo-primary/50"
        }`}
      >
        #
      </Link>

      {/* Looping Huruf A-Z */}
      {alphabets.map((char) => {
        const isSelected = selectedLetter === char;
        return (
          <Link
            key={char}
            href={`/alphabet/${char}`}
            className={`w-10 h-10 flex items-center justify-center rounded-lg font-black transition-all border ${
              isSelected
                ? "bg-onkyo-primary border-onkyo-primary text-white shadow-[0_0_15px_#FF007F] scale-110"
                : "bg-onkyo-nav border-onkyo-secondary/20 text-onkyo-muted hover:border-onkyo-primary/50 hover:text-onkyo-primary"
            }`}
          >
            {char}
          </Link>
        );
      })}
    </div>
  );
}
