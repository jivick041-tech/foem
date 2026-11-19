/* ===== 太陽電池修練場：老師設定檔 =====
 * 可以直接在 GitHub 網頁上按「鉛筆」編輯這個檔案，存檔後約 1~5 分鐘生效。
 */
window.PVQ_CONFIG = {
  // Google Apps Script 網頁應用程式網址（…/exec）。留空 = 不記錄、不同步、不顯示排行榜
  API: "",
  // true = 只允許試算表「名單」工作表上的 學號＋姓名 登入（需先設定 API）
  ROSTER: false,
  // true = 所有章節直接開放；false = 要先擊敗前一章魔王（學生仍可選擇「跳關」，會被記錄）
  FREE_ROAM: false,
  // 挑戰魔王前，至少要通過該章多少比例的觀念節點（0 ~ 1）
  BOSS_REQ: 0.6
};
