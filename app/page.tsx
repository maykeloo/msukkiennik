import { getStoryblokApi, ISbStoriesParams } from '@storyblok/react';
import StoryblokStory from '@storyblok/react/story';

interface Props {
  props: { story: any; key: any };
  revalidate: number;
}

export default async function Home() {
  const { data } = await getStoryBookData();
  return <StoryblokStory story={data.story} bridgeOptions={{}} />;
}

async function getStoryBookData() {
  const sbParams: ISbStoriesParams = { version: 'draft' };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, { cache: 'no-store' });
}
