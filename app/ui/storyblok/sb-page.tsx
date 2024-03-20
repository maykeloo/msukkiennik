import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';
import { PageStoryblok } from '@/component-types-sb';

export const StoryblokPage = ({ blok }: { blok: PageStoryblok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);
