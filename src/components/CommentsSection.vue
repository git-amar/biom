<template>
  <div class="container">
    <div class="heading">What people are saying</div>

    <carousel :items-to-show="1">
      <slide v-for="(comment, index) in comments" :key="index">
        <div class="flex flex-col align-center justify-center">
          <div class="comment">“{{ comment.text }}”</div>

          <div class="author">- {{ comment.author }}</div>
        </div>
      </slide>

      <template #addons>
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

type comment = {
  text: string
  author: string
}
const comments: Array<comment> = [
  {
    text: "Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They're great because they don't dry my skin out and I love knowing that buying their products are better for the environment.",
    author: 'Rachel H.'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempor ullamcorper urna volutpat molestie. Maecenas sed nisl vel risus viverra eleifend. Maecenas interdum nibh leo, vel faucibus ex bibendum porttitor.',
    author: 'Lorem Ipsum Generator'
  },
  {
    text: '...',
    author: 'John Doe'
  },
  {
    text: '...',
    author: 'John Doe'
  }
]
</script>

<style scoped>
.container {
  background-color: #f2f2f2;
  height: 450px;
  width: 100%;
  max-width: 1390px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
}

.heading {
  color: #002d33;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2.1px;
  @apply font-BrandonGrotesque font-normal;
}

.comment {
  color: #002d33;
  font-size: 25px;
  @apply font-ChronicleDisplay font-bold;
}

.author {
  margin-top: 25px;
  color: #002d33;
  font-size: 13px;
  letter-spacing: 1.3px;
  @apply font-BrandonGrotesque font-medium;
}

.carousel {
  max-height: 156px;
  max-width: 747px;
  margin-top: 26px;
}

.carousel .carousel__pagination {
  margin-top: 50px;

  &:deep(.carousel__pagination-item + .carousel__pagination-item) {
    margin-left: 12px;
  }

  &:deep(.carousel__pagination-item .carousel__pagination-button) {
    padding: 0;
  }

  &:deep(.carousel__pagination-item .carousel__pagination-button::after) {
    background-color: transparent;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #004a4c;
  }

  &:deep(.carousel__pagination-item .carousel__pagination-button:hover::after),
  &:deep(.carousel__pagination-item .carousel__pagination-button--active::after) {
    background-color: #004a4c;
  }
}
</style>
