"use client";

 import React from 'react';
 import FullCalendar from '@fullcalendar/react';
 import dayGridPlugin from '@fullcalendar/daygrid';
 import timeGridPlugin from '@fullcalendar/timegrid';
 import interactionPlugin from '@fullcalendar/interaction';
 import jaLocale from '@fullcalendar/core/locales/ja';
 import usePlanState from '../hooks/usePlanState';
 import { useRouter } from 'next/navigation'; // useRouter フックをインポート

 const Calendar = () => {
   const {
     setDate
   } = usePlanState();
   const router = useRouter(); // useRouter インスタンスを作成

   const handleDateClick = (info) => {
     setDate(info.dateStr); // クリックされた日付を Plan コンポーネントの状態に設定
     router.push('/plan'); // /plan ページへ遷移
   };

   const {
     items
   } = usePlanState();

   const calendarEvents = items.map(item => ({
     title: item.text,
     start: item.date
   }));

   return (
     <FullCalendar
       plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
       initialView="dayGridWeek"
       locale={jaLocale}
       headerToolbar={{
         left: 'prev,next',
         center: 'title',
         right: 'dayGridYear,dayGridWeek,timeGridDay'
       }}
       titleFormat={{
         year: 'numeric',
         month: 'numeric',
         day: 'numeric'
       }}
       dateClick={handleDateClick} // dateClick イベントハンドラーを更新
       eventClick={(info) => alert(`イベント: ${info.event.title}`)}
       events={[
        {title:'会議', start: '2025-05-04'},
        {title:'寝る', start: '2025-05-05', end: '2025-05-07'}
      ]}
     />
   );
 };

 export default Calendar;