'use client';

import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import { Feature } from '@/app/ui/storyblok/feature';
import { ButtonBase } from '@/app/ui/components/button';
import { Grid } from '@/app/ui/storyblok/grid';
import { Teaser } from '@/app/ui/storyblok/teaser';
import { StoryblokPage } from '@/app/ui/storyblok/sb-page';
import { TextWithIcon } from '@/app/ui/components/text-with-icon';
import { Hero } from '@/app/ui/components/hero/hero';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: StoryblokPage,
  button: ButtonBase,
  hero: Hero,
  text_with_icon: TextWithIcon,
};

storyblokInit({
  accessToken: 'cxpZQOw5vS1RMweA36KeUgtt',
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
