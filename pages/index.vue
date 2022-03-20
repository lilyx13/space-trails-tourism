<template>
  <div>
    <ul>
      <li v-for="post in articles" :key="post.d">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const res = await app.$storyapi.get("cdn/stories", {
      starts_with: "technology/",
    });

    // Let's convert content.date from a String to a Date
    const articles = res.data.stories.map((story) => {
      story.content.date = new Date(story.content.date);
      return story;
    });

    return { articles };
  },
};
</script>
