interface FooterProps {
  footerText: string;
}

export default function Footer({ footerText }: FooterProps) {
  return (
    <footer className="bg-amber-200 text-white p-4 mt-6">
      <p className="flex justify-center text-black font-bold">{footerText}</p>
    </footer>
  );
}