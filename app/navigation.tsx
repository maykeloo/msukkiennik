'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import navigation from './navigation.module.css';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

function NavigationElement({
  className,
  orientation,
}: {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}) {
  return (
    <NavigationMenu
      orientation={orientation}
      className={cn(navigation.navigation, className)}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Strona główna
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/posts' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Posty
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/about' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              O mnie
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/projects' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Projekty
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function Navigation() {
  return (
    <>
      <NavigationElement className='hidden md:block' />
      <div className='block md:hidden'>
        <Sheet>
          <SheetTrigger>
            <HamburgerMenuIcon />
          </SheetTrigger>
          <SheetContent side='top'>
            <NavigationElement className='flex-col' orientation='vertical' />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
