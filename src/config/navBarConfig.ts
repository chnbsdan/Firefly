import {LinkPreset, type NavBarConfig, type NavBarLink, NavBarSearchMethod, type NavBarSearchConfig} from "../types/config";
import {siteConfig} from "./siteConfig";

// 根据页面开关动态生成导航栏配置
const getDynamicNavBarConfig = (): NavBarConfig => {
  const links: (NavBarLink | LinkPreset)[] = [
    LinkPreset.Home,
    LinkPreset.Archive,
  ];

  // 支持自定义导航栏链接,并且支持多级菜单
  links.push({
    name: "链接",
    url: "/links/",
    icon: "material-symbols:link",
    children: [
      {
        name: "GitHub",
        url: "https://github.com/chnbsdan/Firefly",
        external: true,
        icon: "fa6-brands:github",
      },
      {
        name: "Bilibili",
        url: "https://space.bilibili.com/1913680621",
        external: true,
        icon: "fa6-brands:bilibili",
      },
      {
        name: "hangdn nav",
        url: "https://nav.1356666.xyz",
        external: true,
        icon: "fa6-brands:bilibili",
      },
    ],
  });

  links.push(LinkPreset.Friends);

  // 添加公益服务项目
  links.push({
    name: "公益服务",
    url: "/public-service/", // 可以设置一个默认路径，或者用"#"作为占位符
    icon: "material-symbols:volunteer-activism", // 使用合适的图标
    children: [
      {
        name: "公共项目",
        url: "/other",
        external: false,
        icon: "material-symbols:other-admission", // 选择合适的图标
      },
      {
        name: "我的项目",
        url: "/my",
        external: false,
        icon: "material-symbols:person", // 选择合适的图标
      },
      {
        name: "在线订阅转换",
        url: "https://sub.2098.nyc.mn", // 替换为您想要的实际外部链接
        external: true,
        icon: "material-symbols:open-in-new", // 外部链接图标
      },
    ],
  });

  // 根据配置决定是否添加留言板页面
  if (siteConfig.pages.guestbook) {
    links.push(LinkPreset.Guestbook);
  }

  links.push({
    name: "关于",
    url: "/content/",
    icon: "material-symbols:info",
    children: [
      ...(siteConfig.pages.anime ? [LinkPreset.Anime] : []), // 根据配置决定是否添加追番页面
      ...(siteConfig.pages.sponsor ? [LinkPreset.Sponsor] : []), // 根据配置决定是否添加赞助页面
      LinkPreset.About,
    ],
  });
  // 仅返回链接，其它导航搜索相关配置在模块顶层常量中独立导出
  return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
  // 可选：PageFind， MeiliSearch
  // 选择PageFind时：NavBarSearchMethod.PageFind,
  // 选择MeiliSearch时：NavBarSearchMethod.MeiliSearch,
  method: NavBarSearchMethod.PageFind,
  // 当选择 MeiliSearch 时的配置
  meiliSearchConfig: {
    INDEX_NAME: 'posts',
    CONTENT_DIR: 'src/content/posts',
    MEILI_HOST: "http://localhost:7700",
    PUBLIC_MEILI_HOST: "http://localhost:7700",
    PUBLIC_MEILI_SEARCH_KEY: "41134b15079da66ca545375edbea848a9b7173dff13be2028318fefa41ae8f2b",
  }
}

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
