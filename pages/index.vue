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
import { useStoryblokBridge, useStoryblokApi } from "@storyblok/nuxt";

export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/", {
        version: "draft",
        starts_with: "blog/",
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
  /*
  // mounted adds the component to the DOM, used for sending an http request to fetch data for the component
  mounted() {
    this.$storybridge(
      () => {
        const storyblokInstance = new StoryblokBridge();

        // Listen to the Visual Editor for updates
        storyblokInstance.on(["input", "published", "change"], (event) => {
          // updates content
          if (event.action == "input") {
            if (event.story.id === this.story.id) {
              this.storycontent = event.story.content;
            }
          } else {
            this.$nuxt.$router.go({
              path: this.$nuxt.$router.currentRoute,
              force: true,
            });
          }
        });
      },
      // handle error
      (error) => {
        console.error(error);
      }
    );
  },
  // Create dynamic routes and handle json from the api
  asyncData(context) {
    const fullSlug =
      context.route.path == "/" || context.route.path == ""
        ? "home"
        : context.route.path;
    return context.app.$storyapi
      .get(`cdn/stories/${fullSlug}`, {
        // change to published for production
        version: "draft",
      })
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res);
          context.error({
            statusCode: 404,
            message: "Failed to receive content from Storyblok",
          });
        } else {
          console.error(res.response.data);
          context.error({
            satusCode: res.response.status,
            message: res.response.data,
          });
        }
      });
  },
  */
};
</script>
