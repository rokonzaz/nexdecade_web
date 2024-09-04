/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

// import Swiper from "../plugins/swiper/swiper-bundle.js";
// import Shuffle from "../plugins/shufflejs/shuffle";

(function () {
  "use strict";

  // Preloader js
  // window.addEventListener("load", (e) => {
  //   document.querySelector(".preloader").style.display = "none";
  // });

  //sticky header
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      header.classList.add("header-sticky");
    } else {
      header.classList.remove("header-sticky");
    }
  });

  //reviews-carousel
  new Swiper(".reviews-carousel", {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".reviews-carousel-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // Our Clients
  new Swiper(".clients-carousel", {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".clients-carousel-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 5,
      },
    },
  });

  //auth-banner-carousel
  new Swiper(".auth-banner-carousel", {
    slidesPerView: 1,
    pagination: {
      el: ".auth-banner-carousel .pagination",
      type: "bullets",
      clickable: true,
    },
  });

  // for tab component
  // Get all the tab groups on the page
  const tabGroups = document.querySelectorAll("[data-tab-group]");
  // Loop through each tab group
  tabGroups.forEach((tabGroup) => {
    // Get the tabs nav and content for this tab group
    const tabsNav = tabGroup.querySelector("[data-tab-nav]");
    const tabsNavItem = tabsNav.querySelectorAll("[data-tab]");

    // Get the active tab index from local storage, or default to 0 if not set
    const activeTabName =
      localStorage.getItem(`activeTabName-${tabGroup.dataset.tabGroup}`) ||
      tabsNavItem[0].getAttribute("data-tab");

    // Set the active tab
    setActiveTab(tabGroup, activeTabName);

    // Add a click event listener to each tab nav item
    tabsNavItem.forEach((tabNavItem) => {
      tabNavItem.addEventListener("click", (e) => {
        e.preventDefault();
        // Get the index of the clicked tab nav item
        const tabName = tabNavItem.dataset.tab;
        setActiveTab(tabGroup, tabName);

        // Save the active tab index to local storage
        localStorage.setItem(
          `activeTabName-${tabGroup.dataset.tabGroup}`,
          tabName
        );
      });
    });
  });

  // Function to set the active tab for a given tab group
  function setActiveTab(tabGroup, tabName) {
    // Get the tabs nav and content for this tab group
    const tabsNav = tabGroup.querySelector("[data-tab-nav]");
    const tabsContent = tabGroup.querySelector("[data-tab-content]");

    // Remove the active class from all tab nav items and content panes
    tabsNav.querySelectorAll("[data-tab]").forEach((tabNavItem) => {
      tabNavItem.classList.remove("active");
    });
    tabsContent.querySelectorAll("[data-tab-panel]").forEach((tabPane) => {
      tabPane.classList.remove("active");
    });

    // Add the active class to the selected tab nav item and content pane
    const selectedTabNavItem = tabsNav.querySelector(`[data-tab="${tabName}"]`);
    selectedTabNavItem.classList.add("active");
    const selectedTabPane = tabsContent.querySelector(
      `[data-tab-panel="${tabName}"]`
    );
    selectedTabPane.classList.add("active");
  }

  // Get Statics
  const statisticsData = [
    { icon: "project.svg", value: "120", label: "Projects" },
    { icon: "product.svg", value: "8", label: "Products" },
    { icon: "service.svg", value: "8", label: "Services" },
    { icon: "experts.svg", value: "150+", label: "Experts" },
    { icon: "clients.svg", value: "1450", label: "Happy Clients" },
    { icon: "experience.svg", value: "17+", label: "Working Experience" }
  ];

  const containerStatistics = document.getElementById('statistics-container');

  const statisticsHTML = statisticsData.map(stat => `
  <div class="w-40 p-4 truncate bg-white shadow-lg rounded-lg text-center flex flex-col justify-between items-center h-[150px] text-dark">
    <img src="/images/icons/${stat.icon}" alt="${stat.label}" class="mx-auto mb-2">
    <div class="text-2xl font-bold">${stat.value}</div>
    <div class="text-sm text-gray-700">${stat.label}</div>
  </div>
`).join('');

  containerStatistics.innerHTML = statisticsHTML;

  // Our Solutions

  const solutions = [
    {
      "title": "Software Design",
      "description": "Comprehensive software engineering services: web and mobile development, bespoke solutions, innovation, scalability.",
      "icon": "software-design.svg"
    },
    {
      "title": "Hardware Design",
      "description": "We specialize in complex PCB design with comprehensive engineering services, FPGA expertise, and firmware development.",
      "icon": "hardware-design.svg"
    },
    {
      "title": "Over The Top (OTT)",
      "description": "Nexdecade leads OTT expansion in Bangladesh, integrating advanced platforms for enhanced content accessibility.",
      "icon": "ott.svg"
    },
    {
      "title": "Vehicle Tracking System",
      "description": "Real-time monitoring, route optimization, fleet management and theft prevention with focus on accuracy and efficiency.",
      "icon": "vehicle-tracking.svg"
    },
    {
      "title": "Fleet Management System",
      "description": "Fleet management software optimizes costs, enhances safety, and improves operational efficiency for organizations.",
      "icon": "fleet-management.svg"
    },
    {
      "title": "GSM Attendance",
      "description": "GSM-based digital solution for secure attendance and access control across diverse environments.",
      "icon": "gsm-attendance.svg"
    },
    {
      "title": "Set Top Box",
      "description": "Transformation of television broadcasting: digital shift, diverse content, STB market dominance.",
      "icon": "set-top-box.svg"
    },
    {
      "title": "Internet Of Things (IOT)",
      "description": "Nexdecade specializes in digital transformation and IoT services, focusing on quality, innovation, and client satisfaction.",
      "icon": "iot.svg"
    }
  ];

  const containerSolutions = document.getElementById('solutions-container');

  let solutionsHTML = solutions.map(solution => `
  <div class="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg  hover:cursor-pointer hover:shadow-xl border hover:border-transparent  text-dark">
    <img class="mx-auto mb-2" src="/images/icons/${solution.icon}" alt="${solution.title} icon"/>
    <div class="text-center">
      <div class="text-lg lg:text-lg font-semibold">${solution.title}</div>
      <p class="text-[14px]">${solution.description}</p>
    </div>
  </div>
`).join('');

  containerSolutions.innerHTML = solutionsHTML;

  // Our Partners
  const partners = [
    {
      "title": "Healthcare",
      "description": "",
      "icon": "healthcare.svg"
    },
    {
      "title": "Telecom",
      "description": "",
      "icon": "telecom.svg"
    },
    {
      "title": "Software",
      "description": "",
      "icon": "software.svg"
    },
    {
      "title": "Automotive",
      "description": "",
      "icon": "automotive.svg"
    },
    {
      "title": "Non-profit",
      "description": "",
      "icon": "non-profit.svg"
    },
    {
      "title": "Hosted Platform",
      "description": "",
      "icon": "hosted-platform.svg"
    },
    {
      "title": "Enterprise",
      "description": "",
      "icon": "enterprise.svg"
    },
    {
      "title": "Logistics",
      "description": "",
      "icon": "logistics.svg"
    }
  ];
  const containerPartners = document.getElementById('partners-container');

  let partnersHTML = partners.map(partner => `
  <div class="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg hover:bg-primary/75 hover:cursor-pointer hover:shadow-xl border hover:border-transparent hover:text-gray-100 text-dark">
    <img class="mx-auto mb-2" src="/images/icons/${partner.icon}" alt="${partner.title} icon"/>
    <div class="text-center">
      <div class="text-base text-center">${partner.title}</div>
      <p class="text-[14px]">${partner.description}</p>
    </div>
  </div>
`).join('');

  containerPartners.innerHTML = partnersHTML;

  // Our Achievements
  const achievements = [
    {
      "title": "Digital Bangladesh Award",
      "description": "",
      "icon": "digital-bangladesh-award.svg"
    },
    {
      "title": "National Award",
      "description": "",
      "icon": "national-award.svg"
    },
    {
      "title": "International Organization for Standardization (ISO)",
      "description": "",
      "icon": "iso.svg"
    },
    {
      "title": "AIUB Job Fair",
      "description": "",
      "icon": "aiub-job-fair.svg"
    }
  ];

  const containerAchievements = document.getElementById('achievements-container');

  let achievementsHTML = achievements.map(partner => `
  <div class="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg hover:bg-primary/75 hover:cursor-pointer hover:shadow-xl border hover:border-transparent hover:text-gray-100 text-dark">
    <img class="mx-auto mb-2 rounded-xl" src="/images/icons/${partner.icon}" alt="${partner.title} icon"/>
    <div class="text-center">
      <div class="text-base text-center font-semibold">${partner.title}</div>
      <p class="text-[14px]">${partner.description}</p>
    </div>
  </div>
`).join('');

  containerAchievements.innerHTML = achievementsHTML;

  // Our Clients
  const clients = [
    {
      "title": "JCW",
      "description": "",
      "icon": "jcw.svg"
    },
    {
      "title": "Banglalink",
      "description": "",
      "icon": "banglalink.svg"
    },
    {
      "title": "Grameenphone",
      "description": "",
      "icon": "grameenphone.svg"
    },
    {
      "title": "Robi",
      "description": "",
      "icon": "robi.svg"
    },
    {
      "title": "Bosundhara",
      "description": "",
      "icon": "bosundhara.svg"
    },
    {
      "title": "D Agency",
      "description": "",
      "icon": "d-agency.svg"
    }
  ];

  const containerClients = document.getElementById('clients-container');

  let clientsHTML = clients.map(client => `
    <div class="swiper-slide">
        <img class="mx-auto hover:cursor-pointer h-20" src="/images/icons/${client.icon}" alt="${client.title ?? 'client'} icon"/>
    </div>
`).join('');

  containerClients.innerHTML = clientsHTML;

  //counter
  function counter(el, duration) {
    const endValue = Number(el.innerText.replace(/\D/gi, ""));
    const text = el.innerText.replace(/\W|\d/gi, "");
    const timeStep = Math.round(duration / endValue);
    let current = 0;
    const timer = setInterval(() => {
      if (current > endValue) {
        current = endValue;
      } else {
        current += 1;
      }
      el.innerText = current + text;
      if (current === endValue) {
        clearInterval(timer);
      }
    }, timeStep);
  }

  document.querySelectorAll(".counter .count").forEach((count) => {
    counter(count, 500);
  });

  //play youtube-video
  const videoPlayBtn = document.querySelector(".video-play-btn");
  if (videoPlayBtn) {
    videoPlayBtn.addEventListener("click", function () {
      const videoPlayer = this.closest(".video").querySelector(".video-player");
      videoPlayer.classList.remove("hidden");
    });
  }

  // Accordion component
  const accordion = document.querySelectorAll("[data-accordion]");
  accordion.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      accordionItem.classList.toggle("active");
    });
  });

  //shuffle
  const Shuffle = window.Shuffle;
  const tabItems = document.querySelector(".integration-tab-items");
  if (tabItems) {
    const myShuffle = new Shuffle(tabItems, {
      itemSelector: ".integration-tab-item",
      sizer: ".integration-tab-item",
      buffer: 1,
    });
    const tabLinks = document.querySelectorAll(".integration-tab .filter-btn");
    tabLinks.forEach((tabItem) => {
      tabItem.addEventListener("click", function (e) {
        e.preventDefault();
        let filter;
        const group = tabItem.getAttribute("data-group");
        filter = group;
        if (filter === "all") {
          filter = Shuffle.ALL_ITEMS;
        }
        tabLinks.forEach((link) => link.classList.remove("filter-btn-active"));
        this.classList.add("filter-btn-active");
        myShuffle.filter(filter);
      });
    });
  }
})();
