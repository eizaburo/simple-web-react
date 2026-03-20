import Hero from './Hero';

// 左メニューの表示制御
export default {
    title: "Components/Hero",
    component: Hero
};

// 各種表示パターンを設定

// 引数無し
export const Default = {};

// Home画面用
export const ForHome = {
    args: {
        height: "200px",
        headline: "ヒーローエリア",
        catchcopy: "ヒーローエリアのキャッチコピー",
    }
};

// Contact画面用
export const ForContact = {
    args: {
        height: "120px",
        headline: "お問合せフォーム",
        catchcopy: "お気軽にお問合せ下さい",
    }
};