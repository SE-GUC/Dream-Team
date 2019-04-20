const fs = require("fs");
const a = [
  {
    Entity: "GAFI",
    Law159: " واحد في الألف من رأس المال الحد الأدنى: 100 الحد الأقصى: 1000",
    Law72: "لا یوجد"
  },
  {
    Entity:
      "الهیئة العامة للاستثمار والمناطق الحرة إیداعات واردة من جهات تتعامل مع البنك المركزي",
    Law159: "",
    Law72: ""
  },
  {
    Entity:
      "Notary Public مصلحة الشهر العقاري والتوثیق إیداعات واردة من جهات تتعامل مع البنك المركزي",
    Law159: "ربع في المائة من رأس المال الحد الأدنى: 10 الحد الأقصى: 1000",
    Law72: "لا یوجد"
  },
  {
    Entity:
      "Commercial جهاز تنمیة التجارة الداخلیة إیداعات واردة من جهات تتعامل مع البنك المركزي",
    Law159: "56 جم مقسم إلى (51 إیرادات + 5 دائنون)",
    Law72: "610 جم مقسم إلى (100 إیرادات + 6دائنون)"
  }
];

const b = [
  {
    one: "SSC Minimum Capital Limit is 50,000 EGP",
    two:
      "SSC Must have at least One Egyptian Manager, In case Founder/Investor is from Foreign Country",
    three:
      "SPC Minimum Capital Limit will be 100,000 EGP in case of Foreign Investor Only,Otherwise there is No Capital Limit",
    four: "SSC and SPC can Only have One Investor as their Founder",
    five: "SPC doesn't have any Managers",
    six: "SSC can't have the same investor founder to Multiple SSC Companies",
    seven:
      "A Contract will be Generated for SSC Companies after Lawyer Fills Form.",
    eight:
      "A Decision will be Generated for SPC Companies after Lawyer Fills Form."
  }
];

fs.writeFileSync("rules/calculationRule.txt", JSON.stringify(a));
fs.writeFileSync("rules/companyRule.txt", JSON.stringify(b));
