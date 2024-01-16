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
          <li
            v-for="event in [...timelineEvents].sort((a, b) => {
              // Sort in descending order based on 'id'
              return b.id - a.id
            })"
            :key="event.id"
          >
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
          title: 'Learned PHP Programming Language',
          label: 'PHP',
          labelColor: 'blue',
          subTitle: 'Start of PHP Journey',
          description:
            'Started my programming journey by diving into the PHP language, exploring its syntax, functionalities, and its application in web development.',
        },
        {
          id: 2,
          title: 'Simple QR Code Generator',
          label: 'Open Source',
          labelColor: 'green',
          subTitle: 'First Open Source Project',
          description:
            'Developed a simple yet functional QR code generator project. This open-source project allowed users to create QR codes with ease. It was a great opportunity to delve into PHP programming and contribute to the open-source community.',
        },
        {
          id: 3,
          title: 'AnonFiles Uploader',
          label: 'Open Source',
          labelColor: 'green',
          subTitle: 'Web Uploader Interface',
          description:
            'Created a web uploader interface using the AnonFiles API. This project aimed to simplify file uploads using a user-friendly web interface connected with AnonFiles, providing an efficient file-sharing solution for users.',
        },
        {
          id: 4,
          title: 'Github Telegram Bot',
          label: 'Open Source',
          labelColor: 'green',
          subTitle: 'GitHub Notifications to Telegram',
          description:
            "Developed a bot that sends GitHub notifications directly to users' Telegram accounts. This bot facilitated quick and convenient access to GitHub updates, enhancing user experience and productivity.",
        },
        {
          id: 5,
          title: 'Paid ERP Solution for Church Management (SJC Vaipur)',
          label: 'Project Development',
          labelColor: 'orange',
          subTitle: 'Church ERP System',
          description:
            'Initiated the development of a paid ERP solution tailored for church management at SJC Vaipur. This comprehensive system aimed to streamline administrative tasks and facilitate smooth operations within the church community.',
        },
        {
          id: 6,
          title: 'Online Holy Mass Booking System',
          label: 'Project Development',
          labelColor: 'orange',
          subTitle: 'COVID-19 Initiative',
          description:
            'Developed an online system for booking holy masses, specifically designed to help control and manage parishioner attendance during the COVID-19 pandemic. The successful implementation of this system resulted in its adoption by more than four churches, ensuring safe and organized participation in religious services.',
        },
        {
          id: 7,
          title: 'Termux Webzone',
          label: 'Tool Development',
          labelColor: 'purple',
          subTitle: 'CLI Application for Web Developers',
          description:
            'Built a robust Command Line Interface (CLI) application tailored for web developers to create, run, and test PHP applications within the confines of Android using Termux. This application aimed to provide a comprehensive toolkit for developers working on-the-go.',
        },
        {
          id: 8,
          title: 'AnonFiles CLI',
          label: 'Tool Development',
          labelColor: 'purple',
          subTitle: 'Console Application for AnonFiles API',
          description:
            'Developed a console application using PHP to facilitate file uploads and downloads via the AnonFiles API directly from the terminal. This command-line tool empowered users to efficiently manage their files with the AnonFiles service in a command-based environment.',
        },
        {
          id: 9,
          title: 'Simple Social Media Project',
          label: 'Project Development',
          labelColor: 'orange',
          subTitle: 'Laravel and Livewire Experiment',
          description:
            'Experimented with Laravel and Livewire to create a simplified version of a social media platform resembling Instagram. This project was aimed at exploring the functionalities of these technologies and gaining hands-on experience in developing social media platforms.',
        },
        {
          id: 10,
          title: 'Participation in Evolhack 2023 Hackathon',
          label: 'Hackathon',
          labelColor: 'red',
          subTitle: 'Innovative Problem-Solving',
          description:
            'Engaged in the Evolhack 2023 Hackathon, participating in a collaborative environment aimed at solving innovative challenges. This hackathon provided an excellent platform to brainstorm creative solutions and network with like-minded individuals.',
        },
        {
          id: 11,
          title: 'Initiated Wexron Hosting',
          label: 'Entrepreneurship',
          labelColor: 'yellow',
          subTitle: 'Web Hosting Startup',
          description:
            'Founded Wexron Hosting, a startup dedicated to providing high-quality web hosting services at competitive rates. The venture aimed to offer reliable and efficient web hosting solutions while prioritizing affordability for users.',
        },
        {
          id: 12,
          title: 'Contributed to FOSSBilling',
          label: 'Open Source Contribution',
          labelColor: 'green',
          subTitle: 'Contribution to Open Source Software',
          description:
            'Contributed to FOSSBilling, an open-source software project, by providing code enhancements, bug fixes, and feature implementations. This involvement aimed to support and improve the functionalities of the billing software for its user community.',
        },
        {
          id: 13,
          title: 'Razorpay Payment Module for FOSSBilling',
          label: 'Open Source Development',
          labelColor: 'green',
          subTitle: 'Integration with FOSSBilling',
          description:
            "Created a payment gateway module for FOSSBilling utilizing the Razorpay platform. This module enabled seamless integration of Razorpay's payment services within the FOSSBilling ecosystem, enhancing its functionalities for users.",
        },
        {
          id: 14,
          title: 'Smart Lock Prototype Development',
          label: 'Prototyping',
          labelColor: 'purple',
          subTitle: 'Security Innovation',
          description:
            'Prototyped a sophisticated smart lock system that allowed authentication through facial recognition, card access, and website/app control. This prototype aimed to revolutionize security measures by providing multiple authentication methods for access control.',
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
