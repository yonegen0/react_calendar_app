"use client";

 import React from 'react';
 import {
   Container,
   Typography,
   TextField,
   Button
 } from '@mui/material';
 import usePlanState from '../hooks/usePlanState';
 import { useRouter } from 'next/navigation';

// Plan コンポーネントの定義
const Plan = () => {
  // usePlanState フックから必要な状態と関数を取得
  const {
    date, // 選択された日付
    text, // 入力された予定のテキスト
    handleDateChange, // 日付が変更された時のハンドラー
    handleTextChange, // テキストが変更された時のハンドラー
    handleAddItem: addItemToState, // カスタムフックの handleAddItem 関数を addItemToState という別名で受け取る
  } = usePlanState();
  // useRouter フックを呼び出し、router インスタンスを作成（ページ遷移のため）
  const router = useRouter();

  // 「追加」ボタンがクリックされた時の処理
  const handleAddItem = () => {
    // まずはカスタムフックの handleAddItem 関数（addItemToState として受け取った関数）を呼び出し、状態を更新
    addItemToState();
    // その後、"/" パス（カレンダー）に遷移
    router.push('/');
  };

  // Plan コンポーネントのレンダリング
  return (
    <Container maxWidth="sm">
      {/* 見出しを表示 */}
      <Typography variant="h4" component="h1" gutterBottom>
        予定追加
      </Typography>
      {/* 日付入力フィールド */}
      <TextField
        label="日付"
        type="date" // タイプを date に設定して日付ピッカーを表示
        fullWidth // 親要素の幅いっぱいに広げる
        margin="normal" // 上下の余白を追加
        value={date} // 現在の日付の状態をバインド
        onChange={handleDateChange} // 日付が変更された時のハンドラーを設定
      />
      {/* 内容入力フィールド */}
      <TextField
        label="内容"
        multiline // 複数行入力可能にする
        rows={4} // 初期表示の行数を4行に設定
        fullWidth // 親要素の幅いっぱいに広げる
        margin="normal" // 上下の余白を追加
        value={text} // 現在のテキストの状態をバインド
        onChange={handleTextChange} // テキストが変更された時のハンドラーを設定
      />
      {/* 追加ボタン */}
      <Button variant="contained" color="primary" onClick={handleAddItem}>
        追加
      </Button>
    </Container>
  );
}

// Plan コンポーネントをエクスポート
export default Plan;