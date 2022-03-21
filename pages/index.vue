<template>
  <div>
    <section
      class="flex flex-col items-center justify-center bg-blue pt-10 pb-4"
    >
      <h1>{{ posts[0].id }}</h1>
      <p>{{ posts[0].title }}</p>
    </section>

    <section>
      <p>{{ posts[0].summary }}</p>
    </section>
  </div>
</template>
<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/", {
        version: "draft",
      })
      .then((res) => {
        console.log(res);
        return {
          page: res.data.story,
          posts: res.data.stories.map((bp) => {
            return {
              id: bp.slug,
              title: bp.content.body[0].name,
              summary: bp.content.body[0].summary,
            };
          }),
        };
      });
  },
};
</script>
