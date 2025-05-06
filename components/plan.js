"use client";

 import React from 'react';
 import {
   Container,
   Typography,
   TextField,
   Button,
   List,
   ListItem,
   ListItemText,
 } from '@mui/material';
 import usePlanState from '../hooks/usePlanState';
 import { useRouter } from 'next/navigation'; // useRouter フックをインポート

 const Plan = () => {
   const {
     date,
     text,
     items,
     handleDateChange,
     handleTextChange,
     handleAddItem: addItemToState, // カスタムフックの handleAddItem を別名で受け取る
   } = usePlanState();
   const router = useRouter(); // useRouter インスタンスを作成

   const handleAddItem = () => {
     addItemToState(); // まずは state を更新
     router.push('/'); // その後、"/" に遷移
   };

   return (
     <Container maxWidth="sm">
       <Typography variant="h4" component="h1" gutterBottom>
         予定追加
       </Typography>
       <TextField
         label="日付"
         type="date"
         fullWidth
         InputProps={{
           style: {
             paddingLeft: '40px', // value の左側にパディングを追加
           }}}
         margin="normal"
         value={date}
         onChange={handleDateChange}
       />
       <TextField
         label="内容"
         multiline
         rows={4}
         fullWidth
         margin="normal"
         value={text}
         onChange={handleTextChange}
       />
       <Button variant="contained" color="primary" onClick={handleAddItem}>
         追加
       </Button>
     </Container>
   );
 }

 export default Plan;