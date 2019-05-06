import React from 'react';
import { loc } from "../../../localization";
import imgLazovskaya from '../../../img/lazovskaya.jpg';
import imgSachkovskiy from '../../../img/sachkovskiy.jpg';
//import imgLipnickiy from '../../../img/lipnickiy.jpg';
import imgScherbaeva from '../../../img/scherbaeva.JPG';
import imgMackevich from '../../../img/mackevich.JPG';
import imgKozirev from '../../../img/kozirev.jpg';
import imgChizevskaya from '../../../img/chizevskaya.JPG';



export const lazovscayaDescr = (
    <div><p><strong>ЕКАТЕРИНА ЛАЗОВСКАЯ</strong></p>
        <p><strong>Hip-Hop Choreo</strong></p>
        <p>Никнейм <strong>KATHRYN (Лэтрин)</strong></p>
        <p> <p>Танцую с 5 лет</p>Победитель и призёр чемпионатов Европы в Эстонии, также дважды чемпионка мира в Чехии (2014 и 2016 год).
           Многократный призёр и победитель различных чемпионатов в Республике Беларусь.</p>
    </div>
);
export const SachkovskiDescr = (
    <div><p><strong>Тренер House Владислав Сачковский (Such/Сач)</strong>, 21 год</p>
        <p>Танцую уже 14 лет, преподаю 2 года.</p>
        <p>Начинал, как и многие, со спортивно-бальных танцев, отдав им 10 лет. Параллельно с этим развивался в классике. А потом мне захотелось больше свободы...</p>
        <p> И вот я танцую House Dance  - очень грувововое и филинговое направление в стрит денсе.</p>
    </div>
);
export const Shcerbaevdesc = (
    <div>
        <p><strong>Тренер Hip-Hop freestyle Мария Щербаева, MILKA</strong></p>
        <p>20 лет</p>
        <p>Танцевальный опыт более 6 лет!</p>
        <p> Неоднократный и постоянный участник и победитель локальных и международных фестивалей и чемпионатов по современным танцам!</p>
        <p>На тренировках особое внимание уделяется изучению основ стиля , креативности и поиску собственного стиля</p>
    </div>
);
export const MackevichDesc =(
    <div>
        <p><strong>Тренер по Break-Dance Мацкевич Николай,  Bboy Mr. Key</strong></p>
        <p>Мне 22 года, танцую брейкинг, отдал этому делу 8 лет.</p>
        <p> Опыт преподавания 5 лет.</p>
        <p> Участвовал на таких фестивалях как Axis of power 2013, Power of 2 (2013 и 2014), Minsk street games (2016 и 2017), BOTY Baltic CIS (2013-2016), New Blood (2016) в Беларуси и на таких фестивалях, как Outbreak Europe (2014, 2015 и 2017) в Словакии, IBE (2015) в Нидерландах, Battle of Est. (2014-2016) в Эстонии, Invisible Soul Crew Anniversary (2017) в Вильнюсе, Vilnius Street Battle (2016-2017) в Вильнюсе, Breaking Masters (2017) в Риге, Joint Jam 2017 в Киеве, Street Noise в Вильнюсе (2018)</p>
    </div>
);
export const KozirevDesc = (
    <div>
        <p> <strong>Тренер Козырев Артём</strong>, Sky-G, 18, танцую с 2011 года, проходил стажировку преподавания 5 лет, стаж преподавания 2 года.</p>
        <p> Стили: <strong>street choreo, urban choreo лирика, фристайл</strong></p>
        <p> Чемпион и призер различных чемпионатов и соревнований по хореографии в сольных и командных зачётах. Бронзовый призер чемпионата мира в Чехии в 2016 году</p>
    </div>
);
export const Chizhevskay = (
    <div>
        <p> <strong> Чижевская Анна</strong></p>
        <p> Танцевальный стаж 6 леc</p>
        <p> Возраст: 19 лет</p>
        <p><strong> Стили: Street choreography, Hip-hop, Jazz-Funk;</strong></p>
       <p> Победитель и призёр различных чемпионатов и соревнований в командных,дуэтных и сольных выступлениях</p>
        <p>«На своих тренировках я делаю акцент на лёгкость общения с тренером, повышение освоения хореографии и повышения уровня  технического исполнения,
            комфорт ученика в стенах студии.Только желание ТАНЦЕВАТЬ ,РАЗВИВАТЬСЯ И ПОБЕЖДАТЬ»</p>
    </div>
);

export const staffs = [
    { name: loc.lazovskaya, image: imgLazovskaya, style: loc.hop, descript: lazovscayaDescr },
    { name: loc.sachkovskiy, image: imgSachkovskiy, style: loc.house, descript: SachkovskiDescr },
    { name: loc.scherbaeva, image: imgScherbaeva, style: loc.hop, descript: Shcerbaevdesc },
    { name: loc.mackevich, image: imgMackevich, style: loc.break, descript:MackevichDesc},
    { name: loc.kozirev, image: imgKozirev, style: loc.skyg, descript:KozirevDesc },
    { name: loc.chizevskaya, image: imgChizevskaya, style: loc.hop, descript:Chizhevskay }
];
