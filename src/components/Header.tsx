
interface HeaderProps {
  headerText: string;
}
export default function Header({ headerText }: HeaderProps) {
    return (
        <header className="bg-blue-500 text-white p-4">
            <h1 className="flex justify-center text-4xl font-bold">{headerText}</h1>
        </header>
    )
}
