interface FooterProps {
  footerText: string;
}

export default function Footer({ footerText }: FooterProps) {
  return (
    <footer className='bg-blue-500 text-white p-4 mt-6'>
      <p className='flex justify-center'>{footerText}</p>
      <div className=""></div>
    </footer>
  );
}