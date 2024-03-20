'use client';

import {
  apiPlugin,
  SbReactComponentsMap,
  storyblokInit,
} from '@storyblok/react/rsc';
import { Feature } from '@/app/ui/storyblok/feature';
import { ButtonBase } from '@/app/ui/components/button';
import { Grid } from '@/app/ui/storyblok/grid';
import { Teaser } from '@/app/ui/storyblok/teaser';
import { StoryblokPage } from '@/app/ui/storyblok/sb-page';

const components: SbReactComponentsMap = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: StoryblokPage,
  button: ButtonBase,
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
