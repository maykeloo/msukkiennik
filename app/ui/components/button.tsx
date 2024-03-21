import { ButtonStoryblok } from '@/component-types-sb';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function ButtonBase({ blok }: { blok: ButtonStoryblok }) {
  const ButtonElement = () => {
    return (
      <Button
        className={cn(`element-background-${blok.before}`)}
        variant={blok.variant as ButtonProps['variant']}
      >
        {blok.text}
      </Button>
    );
  };

  if (blok.link) {
    return (
      <Link href={blok.link.url} legacyBehavior={true}>
        <a>
          <ButtonElement />
        </a>
      </Link>
    );
  }

  return <ButtonElement />;
}
