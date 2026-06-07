const heroSlides = [
    {
        image: "images/Banner1.png",
        title: "智灌先锋",
        subtitle: "智能水肥灌溉一体化系统",
        desc: "面向山地果园、大棚、茶园等农业场景，提供水肥精准调控、智能监测、远程管理的一体化解决方案。",
        features: [
            { title: "精准灌溉", desc: "按需补水" },
            { title: "智能施肥", desc: "精准配比" },
            { title: "实时监测", desc: "远程可视" },
            { title: "远程管理", desc: "多端协同" }
        ],
        stats: [
            { value: "30%+", label: "节水效率提升" },
            { value: "25%+", label: "人工成本降低" },
            { value: "7x24h", label: "云端实时监控" },
            { value: "多场景", label: "园区灵活适配" }
        ]
    },
    {
        image: "images/Banner2.png",
        title: "智灌先锋",
        subtitle: "设施农业智慧控制方案",
        desc: "围绕温室种植环境，整合灌溉、施肥、感知与远程控制能力，打造高效稳定的大棚管理系统。",
        features: [
            { title: "水肥一体", desc: "精准施用" },
            { title: "环境联动", desc: "自动策略" },
            { title: "云端监测", desc: "数据留痕" },
            { title: "绿色增产", desc: "降本提效" }
        ],
        stats: [
            { value: "50+", label: "可接入终端类型" },
            { value: "420ppm", label: "示例实时数据" },
            { value: "75%", label: "灌溉进度掌控" },
            { value: "秒级", label: "远程指令响应" }
        ]
    },
    {
        image: "images/Banner3.png",
        title: "智灌先锋",
        subtitle: "数据驱动农业管理决策",
        desc: "通过感知设备、控制系统和平台数据联动，实现从现场感知到经营决策的全流程数字化闭环。",
        features: [
            { title: "水肥调控", desc: "精准执行" },
            { title: "智能监测", desc: "实时感知" },
            { title: "远程管理", desc: "随时随地" },
            { title: "数据驱动", desc: "科学决策" }
        ],
        stats: [
            { value: "98.6%", label: "设备在线率" },
            { value: "1.2EC", label: "水肥配比参考" },
            { value: "23%", label: "土壤墒情参考" },
            { value: "在线", label: "系统运行状态" }
        ]
    },
    {
        image: "images/Banner4.png",
        title: "智灌先锋",
        subtitle: "果园数字化升级场景",
        desc: "把传感器、控制器和农业物联网平台连接到果园现场，帮助管理者实现可视、可控、可追踪的生产管理。",
        features: [
            { title: "山地果园", desc: "精准补水" },
            { title: "大棚种植", desc: "稳定供给" },
            { title: "茶园管理", desc: "自动巡检" },
            { title: "平台联动", desc: "数据看板" }
        ],
        stats: [
            { value: "3类", label: "重点适配场景" },
            { value: "移动端", label: "掌上巡园管理" },
            { value: "远程", label: "在线控制终端" },
            { value: "全天候", label: "运行监测能力" }
        ]
    },
    {
        image: "images/Banner5.png",
        title: "智慧农业园区",
        subtitle: "可感知、可控制、可追溯的现代农业园区",
        desc: "结合无人机巡检、环境监测、产品追溯和灌溉控制，构建覆盖农事作业与园区运营的智慧农业体系。",
        features: [
            { title: "环境监测", desc: "多维感知" },
            { title: "灌溉控制", desc: "节水稳产" },
            { title: "农事管理", desc: "全程协同" },
            { title: "产品追溯", desc: "可信运营" }
        ],
        stats: [
            { value: "68%", label: "示例灌溉完成率" },
            { value: "320lx", label: "示例光照参数" },
            { value: "二维码", label: "产品追溯能力" },
            { value: "园区级", label: "综合管理方案" }
        ]
    }
];

const caseImageFallbacks = [
    "images/案例一：智能水肥一体机.jpg",
    "images/案例二：大田智能灌溉系统实拍.jpg",
    "images/案例三：蔬菜大棚精准水肥管控场景.jpg",
    "images/案例四：脐橙果园数字化升级场景.jpg"
];

const newsImageFallbacks = [
    "images/新闻一：湖北省智慧农业示范工程.jpg",
    "images/新闻二：智能滴灌系统应用场景.jpg",
    "images/新闻三：“慧农云”农业物联网管理平台.jpg"
];

let currentSlideIndex = 0;
let slideTimer = null;

function resolveImage(image, fallbackImages, index, invalidPattern) {
    if (!image || invalidPattern.test(image)) {
        return fallbackImages[index % fallbackImages.length];
    }

    return image;
}

function getWebsiteData() {
    const localData = localStorage.getItem("websiteData");

    if (localData) {
        return Promise.resolve(JSON.parse(localData));
    }

    return fetch("data/content.json").then(response => response.json());
}

function renderHero(slideIndex) {
    const slide = heroSlides[slideIndex];
    const heroSlide = document.getElementById("heroSlide");
    const heroTitle = document.getElementById("heroTitle");
    const heroSubtitle = document.getElementById("heroSubtitle");
    const heroDesc = document.getElementById("heroDesc");
    const heroFeatures = document.getElementById("heroFeatures");
    const heroStats = document.getElementById("heroStats");
    const dots = document.querySelectorAll(".hero-dot");

    heroSlide.style.backgroundImage = `url("${slide.image}")`;
    heroTitle.textContent = slide.title;
    heroSubtitle.textContent = slide.subtitle;
    heroDesc.textContent = slide.desc;

    heroFeatures.innerHTML = slide.features.map(item => `
        <div class="feature-item">
            <strong>${item.title}</strong>
            <span>${item.desc}</span>
        </div>
    `).join("");

    heroStats.innerHTML = slide.stats.map(item => `
        <div class="stat-card">
            <strong>${item.value}</strong>
            <span>${item.label}</span>
        </div>
    `).join("");

    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === slideIndex);
    });
}

function startHeroSlider() {
    const dotsContainer = document.getElementById("heroDots");

    dotsContainer.innerHTML = heroSlides.map((_, index) => `
        <button
            class="hero-dot${index === 0 ? " active" : ""}"
            type="button"
            aria-label="切换到第${index + 1}张主视觉"
            data-index="${index}">
        </button>
    `).join("");

    dotsContainer.addEventListener("click", event => {
        const dot = event.target.closest(".hero-dot");

        if (!dot) {
            return;
        }

        currentSlideIndex = Number(dot.dataset.index);
        renderHero(currentSlideIndex);
        resetHeroTimer();
    });

    renderHero(currentSlideIndex);
    resetHeroTimer();
}

function resetHeroTimer() {
    if (slideTimer) {
        clearInterval(slideTimer);
    }

    slideTimer = setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
        renderHero(currentSlideIndex);
    }, 4500);
}

function renderCompanyInfo(data) {
    document.getElementById("aboutContent").textContent = data.about;
    document.getElementById("companyName").innerHTML = `<strong>${data.companyName}</strong>`;
    document.getElementById("phone").textContent = `联系电话：${data.phone}`;
    document.getElementById("address").textContent = `公司地址：${data.address}`;
    document.getElementById("email").textContent = `电子邮箱：${data.email}`;
}

function renderProducts(data) {
    const container = document.getElementById("productContainer");

    container.innerHTML = data.products.map(item => {
        const points = (item.points || []).map(point => `<li>${point}</li>`).join("");

        return `
            <article class="product-card">
                <img src="${item.image}" alt="${item.name}">
                <div class="product-info">
                    <span class="product-tag">${item.tag || "智慧农业设备"}</span>
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    ${points ? `<ul class="product-points">${points}</ul>` : ""}
                </div>
            </article>
        `;
    }).join("");
}

function renderCases(data) {
    const container = document.getElementById("caseContainer");

    container.innerHTML = data.cases.map((item, index) => `
        <article class="case-card">
            <img src="${resolveImage(item.image, caseImageFallbacks, index, /images\/case\d+\.jpg$/i)}" alt="${item.name}">
            <div class="case-info">
                <span class="case-tag">${item.tag || "项目交付"}</span>
                <h3>${item.name}</h3>
                <p>${item.desc || "根据不同地块、作物和管理模式提供定制化灌溉与数字化管控方案。"}</p>
            </div>
        </article>
    `).join("");
}

function renderNews(data) {
    const container = document.getElementById("newsContainer");

    container.innerHTML = data.news.map((item, index) => `
        <article class="news-card">
            <img src="${resolveImage(item.image, newsImageFallbacks, index, /images\/news\d+\.jpg$/i)}" alt="${item.title}">
            <div class="news-info">
                <div class="news-date">${item.date}</div>
                <h3>${item.title}</h3>
                <p>${item.summary || "围绕智慧农业建设实践，持续分享项目进展、技术应用与交付成果。"}</p>
            </div>
        </article>
    `).join("");
}

getWebsiteData()
    .then(data => {
        startHeroSlider();
        renderCompanyInfo(data);
        renderProducts(data);
        renderCases(data);
        renderNews(data);
    })
    .catch(error => {
        console.error("加载失败：", error);
    });
