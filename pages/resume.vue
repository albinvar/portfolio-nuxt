<template>
  <div class="mx-4 flex flex-wrap">
    <div class="w-1/6">
      <h1
        class="my-6 mx-8 text-3xl text-gray-700 dark:text-gray-200 font-semibold"
      >
        Resume
      </h1>
    </div>
    <div class="lg:w-1/3 text-left p-8">
      <object
        :data="CoolProgrammerSvg"
        type="image/svg+xml"
        class="block md:hidden mx-auto my-20 w-48 max-h-screen"
        data-aos="fade-left"
      ></object>

      <div class="flow-root">
        <ul class="mb-8">
          <li v-for="event in timelineEvents" :key="event.id">
            <div class="relative pb-8" data-aos="fade-right">
              <span
                class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                aria-hidden="true"
              ></span>
              <div class="relative flex items-start space-x-3">
                <div>
                  <div class="relative px-1">
                    <div
                      class="h-8 w-8 bg-blue-500 rounded-full ring-8 ring-white dark:ring-gray-800 flex items-center justify-center animate__animated animate__pulse animate__infinite"
                    >
                      <svg
                        class="text-white h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="min-w-0 flex-1 py-0">
                  <div class="text-md text-gray-500">
                    <div class="mb-3">
                      <p
                        class="font-medium text-gray-900 dark:text-gray-200 mb-3 mr-2 text-md"
                      >
                        {{ event.title }}
                      </p>
                      <NuxtLink
                        to="#"
                        class="my-0.5 relative inline-flex items-center bg-white dark:bg-gray-500 rounded-full border border-gray-300 dark:border-gray-400 px-3 py-0.5 text-sm"
                      >
                        <div
                          class="absolute flex-shrink-0 flex items-center justify-center"
                        >
                          <span
                            class="h-1.5 w-1.5 rounded-full bg-blue-500"
                            aria-hidden="true"
                          ></span>
                        </div>
                        <div
                          class="ml-3.5 font-medium text-gray-900 dark:text-gray-100"
                        >
                          {{ event.label }}
                        </div>
                      </NuxtLink>
                    </div>
                    <span
                      class="whitespace-nowrap font-semibold text-sm dark:text-gray-400"
                      >{{ event.date }}</span
                    >
                  </div>
                  <div
                    class="mt-2 text-gray-700 dark:text-white font-normal text-sm"
                  >
                    <p>{{ event.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-1/3 md:w-1/2 text-left p-8">
      <object
        :data="CareerSvg"
        type="image/svg+xml"
        class="hidden md:block my-3 mx-auto md:my-40 max-w-xs"
        data-aos="fade-left"
      ></object>
      <object
        :data="RocketSvg"
        type="image/svg+xml"
        class="hidden md:block my-3 mx-auto my-40 max-w-xs"
        data-aos="fade-left"
        data-aos-delay="300"
      ></object>
      <object
        :data="ChoicesSvg"
        type="image/svg+xml"
        class="block md:hidden my-3 mx-auto md:my-40 w-48 max-h-screen"
        data-aos="fade-left"
      ></object>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResumePage',
  data() {
    return {
      CareerSvg: require('~/assets/illustrations/progress.svg'),
      CoolProgrammerSvg: require('~/assets/illustrations/cool_programmer.svg'),
      ChoicesSvg: require('~/assets/illustrations/choices.svg'),
      RocketSvg: require('~/assets/illustrations/404.svg'),
      timelineEvents: [
        {
          id: 1,
          title: 'Started learning PHP',
          label: 'php',
          labelColor: 'blue',
          subTitle: 'something',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam orci eu magna sodales, in luctus dolor semper. Maecenas dignissim velit non fermentum sodales. Nulla sed orci neque. Pellentesque ac rutrum mauris. Nulla at magna id metus eleifend molestie. Cras blandit eleifend iaculis. ',
          date: '13-05-2021',
        },
        {
          id: 2,
          title: 'Started learning Node Js',
          label: 'php',
          labelColor: 'blue',
          subTitle: 'something',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam orci eu magna sodales, in luctus dolor semper. Maecenas dignissim velit non fermentum sodales. Nulla sed orci neque. Pellentesque ac rutrum mauris. Nulla at magna id metus eleifend molestie. Cras blandit eleifend iaculis. ',
          date: '13-05-2021',
        },
        {
          id: 3,
          title: 'Started learning  Python',
          label: 'php',
          labelColor: 'blue',
          subTitle: 'something',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam orci eu magna sodales, in luctus dolor semper. Maecenas dignissim velit non fermentum sodales. Nulla sed orci neque. Pellentesque ac rutrum mauris. Nulla at magna id metus eleifend molestie. Cras blandit eleifend iaculis. ',
          date: '13-05-2021',
        },
        {
          id: 4,
          title: 'Started learning Css',
          label: 'php',
          labelColor: 'blue',
          subTitle: 'something',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam orci eu magna sodales, in luctus dolor semper. Maecenas dignissim velit non fermentum sodales. Nulla sed orci neque. Pellentesque ac rutrum mauris. Nulla at magna id metus eleifend molestie. Cras blandit eleifend iaculis. ',
          date: '13-05-2021',
        },
        {
          id: 5,
          title: 'Started learning Sass',
          label: 'php',
          labelColor: 'blue',
          subTitle: 'something',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam orci eu magna sodales, in luctus dolor semper. Maecenas dignissim velit non fermentum sodales. Nulla sed orci neque. Pellentesque ac rutrum mauris. Nulla at magna id metus eleifend molestie. Cras blandit eleifend iaculis. ',
          date: '13-05-2021',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Resume | Albin Varghese',
    }
  },
}
</script>
