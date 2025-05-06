FROM node:20-alpine

WORKDIR /nextjs

COPY . .

RUN npm install @fullcalendar/core @fullcalendar/react @fullcalendar/daygrid @fullcalendar/interaction @fullcalendar/timegrid
RUN npm install @mui/material @emotion/react @emotion/styled
CMD ["npm", "start"]
