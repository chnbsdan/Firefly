import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
  title: "公告", // 公告标题
  content: "欢迎来到我的博客！如果自己的才华还撑不起梦想时，就应该静下来学习；如果自己的能力还驾驭不了目标时，就应该沉下心来历练；那些成长的磨砺、奋斗的汗水，都将化作你的底气和格局，累积成你向上攀爬的阶梯，支撑着你看到更高处的风景。", // 公告内容
  closable: true, // 允许用户关闭公告
  link: {
    enable: true, // 启用链接
    text: "了解更多", // 链接文本
    url: "/about/", // 链接 URL
    external: false, // 内部链接
  },
};
