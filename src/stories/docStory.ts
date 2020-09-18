import {Story} from "@storybook/react";
export const docStory = function <T>(
  story: Story<T>,
  args: Partial<T>,
  docs: string
): Story<T> {
  story = story.bind({});

  Object.defineProperty(story, "story.args", args);
  Object.defineProperty(story, "story.parameters.docs.storyDescription", docs);

  return story;
};
