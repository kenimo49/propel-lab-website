import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `# Yureru — 心が揺れる音楽プロジェクト

## 概要

Yureruは「心が揺れる」――そんな、言葉にならない感情の瞬間を音楽・言葉・映像でやさしくすくい上げるプロジェクトです。合同会社Propel-Labが運営しています。

繊細な"揺れ"に焦点を当て、意味を限定しない"余白"のある表現を通じて、聴く人それぞれの心にそっと寄り添う作品を目指しています。

## 数字

- 公開楽曲数: 409本以上
- YouTube登録者数: 3,815人
- 配信: YouTube、Spotify（Soundrop経由）
- 所属アーティスト: 2名

## 所属アーティスト

### Yumei（ユメイ） — メインボーカル

誰かの記憶の奥で、そっと揺れている感情。そんな"名前のつかない気持ち"を、歌にしたく名づけました。静かな夜、ふと思い出した風景。届かなかった言葉。わたしの歌が、あなたの"ひとりの時間"に、そっと寄り添えますように。

### Silk Reign（シルクレイン） — 洋楽バラード

英語バラードを中心に、深い感情を繊細な声で表現するアーティスト。夜の静けさに溶け込むような、やわらかく力強い歌声が特徴です。

## 世界観・ターゲット

- テーマ: 泣ける、エモい、儚い、夜、雨、手紙、孤独、記憶
- ターゲット: INFJ/INFP、繊細さん（HSP）、孤独感を抱える人
- コンセプト: 感動の構造化と音楽化

## 制作技術

AI技術を活用した次世代の音楽制作ワークフロー:

- **Suno AI**: 楽曲生成
- **Stable Diffusion**: アートワーク生成
- **Canva**: サムネイル制作
- **CapCut**: 映像編集
- **Soundrop**: Spotify等への音楽配信

## 公式リンク

- YouTube: https://youtube.com/@Yureru-s4n
- note: https://note.com/yureru_propel
- Instagram: https://www.instagram.com/yureru_s4n/
- 運営: 合同会社 Propel-Lab（https://www.propel-lab.co.jp/）
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
};
