interface HeaderProps {
  headerText: string;
  bgColor: string;
  boldOrNot?: boolean; // Optional prop
}

export default function Header({ headerText, bgColor, boldOrNot = false }: HeaderProps) {
  return (
    <header className={`${bgColor} text-white p-4`}>
      <h1 className={`flex justify-center text-4xl ${boldOrNot ? 'font-bold' : ''}`}>
        {headerText}
      </h1>
    </header>
  );
}
