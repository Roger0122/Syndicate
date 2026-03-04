import { defineStore } from 'pinia'

export const usechapterstore = defineStore('chapter', () => {
  const chapters = [
    {
      id: 1,
      title: '第一章：獅眼守望',
      tasks: [
        { id: 1, area: '絕望岩灘', content: '殺死希拉克進城', completed: false },
        { id: 2, area: '暮光海灘', content: '踩點 → 炙熱鹽沼 (打破三個鳥蛋)', completed: false },
        { id: 3, area: '海潮地穴', content: '踩點 → 回暮光海灘 → 海潮孤島', completed: false },
        { id: 4, area: '海潮孤島', content: '殺酷寒之使拿醫藥箱 (回城領跑速水)', completed: false },
        { id: 5, area: '水聲之淵', content: '殺死深淵巨蟹 (天賦點)', completed: false },
        { id: 6, area: '禁靈之獄下層', content: '完成迷宮試煉①', completed: false },
        { id: 7, area: '禁靈之獄上層', content: '殺死典獄長布魯圖斯', completed: false },
        { id: 8, area: '魅影船墓', content: '找不滅之火 → 殺費爾船長 (天賦點)', completed: false },
        { id: 9, area: '怨忿之窟深處', content: '擊殺莫薇兒 (進第二章)', completed: false },
      ],
    },

    {
      id: 2,
      title: '第二章：森林營地',
      tasks: [
        { id: 1, area: '獸穴', content: '殺死白色巨獸 (領第二支水)', completed: false },
        { id: 2, area: '罪孽之殿第二層', content: '完成試煉② → 拿寶石', completed: false },
        { id: 3, area: '靜謐陵墓', content: '完成試煉③ → 拿黃金之手 (天賦點)', completed: false },
        {
          id: 4,
          area: '西部密林',
          content: '殺巨蛛之母 → 殺阿特力隊長 (天賦點)',
          completed: false,
        },
        {
          id: 5,
          area: '盜賊任務',
          content: '殺或幫阿莉雅/克雷頓/歐克 (天賦獎勵)',
          completed: false,
        },
        { id: 6, area: '濕地', content: '殺歐克 → 移除樹根 → 瓦爾廢墟', completed: false },
        { id: 7, area: '北部密林', content: '踩點 → 瀑布洞穴 (拿跑速工藝)', completed: false },
        { id: 8, area: '古金字塔', content: '擊殺瓦爾超靈 (進第三章)', completed: false },
      ],
    },

    {
      id: 3,
      title: '第三章：薩恩營地',
      tasks: [
        {
          id: 1,
          area: '火葬場',
          content: '完成試煉④ → 擊敗派蒂拿手鐲 (防禦工藝)',
          completed: false,
        },
        { id: 2, area: '下水道', content: '收集 3 個半身像 (天賦點)', completed: false },
        { id: 3, area: '市集地帶', content: '黑石陵寢完成試煉⑤ (元素攻擊工藝)', completed: false },
        { id: 4, area: '激戰廣場', content: '拿絲帶線軸 → 不朽海港拿亞硫酸', completed: false },
        { id: 5, area: '日耀神殿', content: '與達拉對話拿煉獄之粉 (火傷工藝)', completed: false },
        { id: 6, area: '月影神殿', content: '擊退派蒂拿神塔之鑰 (電傷工藝)', completed: false },
        { id: 7, area: '皇家花園', content: '完成試煉⑥ → 拿全能力工藝', completed: false },
        { id: 8, area: '圖書館', content: '找四張書頁 (解鎖寶石購買)', completed: false },
        { id: 9, area: '塔頂', content: '擊殺神主 (進第四章)', completed: false },
      ],
    },

    {
      id: 4,
      title: '第四章：統治者之殿',
      tasks: [
        { id: 1, area: '乾凅湖岸', content: '擊殺福爾 (拿紅旗)', completed: false },
        { id: 2, area: '漆黑礦坑', content: '釋放迪虛瑞特精神 (天賦點)', completed: false },
        { id: 3, area: '水晶礦脈', content: '踩點 (拿冰傷工藝)', completed: false },
        { id: 4, area: '岡姆的堡壘', content: '擊殺岡姆拿憤怒之眼 (連線工藝)', completed: false },
        { id: 5, area: '大競技場', content: '擊殺德拉索拿慾望之眼 (插槽工藝)', completed: false },
        { id: 6, area: '獸腹', content: '擊殺派蒂 (元素抗性工藝)', completed: false },
        { id: 7, area: '育靈之室', content: '殺德瑞/馬雷葛羅/薛朗', completed: false },
        { id: 8, area: '黑靈核心', content: '擊殺馬拉凱 (進第五章)', completed: false },
      ],
    },

    {
      id: 5,
      title: '第五章：監守高塔',
      tasks: [
        { id: 1, area: '鎮壓地帶', content: '拿探測棒 → 殺判官卡斯蒂克斯', completed: false },
        { id: 2, area: '無罪之室', content: '擊殺聖宗與善', completed: false },
        { id: 3, area: '葬骨禮堂', content: '拿純淨之印 (天賦點/工藝)', completed: false },
        { id: 4, area: '聖物間', content: '拿齊三個聖物 (天賦點)', completed: false },
        { id: 5, area: '聖堂屋頂', content: '擊殺奇塔弗 (抗性 -30%)', completed: false },
      ],
    },

    {
      id: 6,
      title: '第六章：獅眼守望 (重返)',
      tasks: [
        { id: 1, area: '絕望岩灘', content: '全清圖 (解鎖莉莉全寶石)', completed: false },
        { id: 2, area: '炙熱鹽沼', content: '擊殺拜恥女王 (拿征服之眼)', completed: false },
        { id: 3, area: '卡魯堡壘', content: '擊殺圖克瑪哈 (天賦點/工藝)', completed: false },
        { id: 4, area: '禁靈之獄', content: '完成試煉⑦ → 殺薜朗', completed: false },
        { id: 5, area: '災變峽谷', content: '擊殺艾貝拉斯 (天賦點)', completed: false },
        { id: 6, area: '濕地', content: '擊殺傀儡女王瑞斯拉薩 (天賦點)', completed: false },
        { id: 7, area: '絕望烽塔', content: '點火送黑旗 (工藝)', completed: false },
        { id: 8, area: '海洋王座', content: '擊殺海洋王 (進第七章)', completed: false },
      ],
    },

    {
      id: 7,
      title: '第七章：橋墩營地',
      tasks: [
        { id: 1, area: '靜謐陵墓', content: '完成試煉⑧ → 拿馬雷葛羅的地圖', completed: false },
        { id: 2, area: '罪孽之殿', content: '放入地圖進書房 → 殺馬雷葛羅拿毒液', completed: false },
        { id: 3, area: '罪孽之殿第二層', content: '完成試煉⑨', completed: false },
        { id: 4, area: '絕望之巢', content: '擊殺葛魯斯寇 (天賦點)', completed: false },
        { id: 5, area: '驚魂樹洞', content: '抓 7 隻螢火蟲', completed: false },
        { id: 6, area: '堤道', content: '拿奇夏拉之星 (天賦點/工藝)', completed: false },
        { id: 7, area: '艾爾卡莉之網', content: '擊殺艾爾卡莉 (進第八章)', completed: false },
      ],
    },

    {
      id: 8,
      title: '第八章：薩恩營地 (重返)',
      tasks: [
        { id: 1, area: '德瑞的腐化池', content: '擊殺德瑞', completed: false },
        { id: 2, area: '甦醒奇點', content: '擊殺托爾曼 (天賦點)', completed: false },
        { id: 3, area: '糧儲關口', content: '擊殺古靈軍團 (天賦點)', completed: false },
        { id: 4, area: '日耀神殿', content: '擊殺諸神晨曦 (日耀之石/工藝)', completed: false },
        { id: 5, area: '月耀神殿', content: '擊殺諸神黃昏 (月影之石/工藝)', completed: false },
        { id: 6, area: '大浴場', content: '完成試煉⑩ (工藝)', completed: false },
        { id: 7, area: '恐懼之沼', content: '擊殺伊果 (天賦點)', completed: false },
        { id: 8, area: '天壇', content: '擊殺日耀與月影雙神 (進第九章)', completed: false },
      ],
    },

    {
      id: 9,
      title: '第九章：統治者之殿 (重返)',
      tasks: [
        { id: 1, area: '瓦斯堤里荒漠', content: '找風暴之刃 (工藝)', completed: false },
        { id: 2, area: '沸騰湖泊', content: '殺巨蜥拿蜥毒 (工藝)', completed: false },
        { id: 3, area: '沙瀑流坑', content: '擊殺夏卡莉女神 (天賦點)', completed: false },
        { id: 4, area: '隧道遺跡', content: '完成試煉⑪ (工藝)', completed: false },
        { id: 5, area: '颶風神殿', content: '擊殺卡洛翰 (天賦點)', completed: false },
        { id: 6, area: '煉油廠', content: '殺艾達將軍拿查爾森之粉', completed: false },
        { id: 7, area: '黑靈之核', content: '擊殺墮道三巨頭 (進第十章)', completed: false },
      ],
    },

    {
      id: 10,
      title: '第十章：奧瑞亞的碼頭',
      tasks: [
        { id: 1, area: '聖堂屋頂', content: '救班恩', completed: false },
        { id: 2, area: '葬骨禮堂', content: '完成試煉⑫ (天賦點/工藝)', completed: false },
        { id: 3, area: '鎮壓地帶', content: '擊殺范尼達 (天賦點)', completed: false },
        { id: 4, area: '褻瀆之室', content: '擊殺伊爾莉斯 (純淨之杖/工藝)', completed: false },
        { id: 5, area: '祭壇', content: '擊殺奇塔弗 (抗性再 -30%)', completed: false },
      ],
    },
  ]

  return {
    chapters,
  }
})
