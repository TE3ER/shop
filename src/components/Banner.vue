<template>
  <div class="bg-yellow-400 text-white p-4 flex items-center justify-between overflow-hidden">
    <div class="marquee-container">
      <div class="marquee" ref="marquee">
        <p class="text-sm marquee-text">
          <!-- Початковий текст -->
          Замовлення обробляються у робочий час Пн-Пт з 9:00-18:00 &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; Замовлення обробляються у робочий час Пн-Пт з 9:00-18:00 &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; Замовлення обробляються у робочий час Пн-Пт з 9:00-18:00
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Замовлення обробляються у робочий час Пн-Пт з
          9:00-18:00 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Замовлення обробляються у робочий час
          Пн-Пт з 9:00-18:00 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Замовлення обробляються у
          робочий час Пн-Пт з 9:00-18:00 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <!-- Вставте сюди більше тексту, щоб натпис продовжив прокручуватися -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  mounted() {
    this.startMarquee()
  },
  methods: {
    startMarquee() {
      const marqueeElement = this.$refs.marquee
      const marqueeTextElement = this.$refs.marquee.querySelector('.marquee-text')
      const marqueeTextWidth = marqueeTextElement.clientWidth
      const containerWidth = marqueeElement.clientWidth
      const duration = (marqueeTextWidth + containerWidth) / 100 // Пропорційна тривалість анімації
      marqueeTextElement.style.animationDuration = `${duration}s`
    }
  }
}
</script>

<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
}

.marquee {
  white-space: nowrap;
  position: relative;
}

.marquee-text {
  animation: marquee-animation linear infinite;
  animation-fill-mode: forwards;
}

@keyframes marquee-animation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
