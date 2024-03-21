import { Button } from '@/components/ui/button';
import { Navigation } from '@/app/navigation';
import Link from 'next/link';
import { DownloadIcon } from '@radix-ui/react-icons';

export function Header() {
  return (
    <header className='flex items-center justify-between pt-5'>
      <Link href='/'>
        <h1>My page</h1>
      </Link>
      <nav>
        <Navigation />
      </nav>
      <Button className='gap-2'>
        <DownloadIcon />
        <span className='hidden md:block'>Resume</span>
        <span className='block md:hidden'>CV</span>
      </Button>
    </header>
  );
}
