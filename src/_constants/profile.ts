type Profile = {
  name: string;
  bio: string[];
  skills: string[];
};

type Region = "en" | "ja";

function getProfile(region: Region): Profile {
  switch (region) {
    case "en":
      return {
        name: "wiyco",
        bio: [
          "Hi!",
          "\n",
          'I usually go by the name "wiyco".',
          "I am continuously catching up every day to move away from being a temporary software engineer.",
          "\n",
          "My interests include service design, team management, web development (full-stack), mobile development, UI/UX design, and animation.",
          "\n",
          "I have obtained the Applied Information Technology Engineer certification.",
        ],
        skills: [],
      };
    case "ja":
      return {
        name: "wiyco",
        bio: [
          "こんにちは！",
          "\n",
          '普段は"wiyco"という名前で活動しています。',
          "ソフトウェアエンジニア（仮）から離脱するために、日々キャッチアップを続けています。",
          "\n",
          "関心のあるものは、サービスデザイン・チームマネジメント・Web（フルスタック）・モバイル・UI/UXデザイン・アニメーションです。",
          "\n",
          "応用情報技術者を取得しています。",
        ],
        skills: [],
      };
  }
}

export { getProfile };
