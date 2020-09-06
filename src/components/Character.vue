<template>
  <div class="card" @click="toggleClass = !toggleClass" :class="toggleClass ? 'flipped': null">
    <div class="card__image">
      <img :src="character.img" :alt="character.name" />
    </div>
    <div class="card__content">
      <div class="name">{{character.name}}</div>
      <div class="actor">
        <span>Actor</span>
        <span>{{character.portrayed}}</span>
      </div>
      <div class="birthday">
        <span>Birthday</span>
        <span>{{character.birthday}}</span>
      </div>
      <div class="status">
        <span>Status</span>
        <span>{{character.status}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      required: true,
      type: Object,
    },
  },
  data: () => ({
    toggleClass: false,
  }),
};
</script>


<style lang="scss" scoped>
.card {
  width: 100%;
  height: 350px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: -webkit-transform 0.8s
    cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: -webkit-transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275),
    -webkit-transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 6px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  margin-bottom: 1.5em;

  > div {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 6px;
    background: white;
  }

  .card__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  .card__content {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    // padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div:not(:last-of-type) {
      margin-bottom: 0.5em;
    }
    .name {
      font-size: 25px;
      font-weight: bold;
    }

    .actor,
    .birthday,
    .status {
      span:first-of-type {
        font-weight: bold;
        &::after {
          content: ":";
          margin-right: 5px;
        }
      }
    }
  }

  &.flipped {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
</style>