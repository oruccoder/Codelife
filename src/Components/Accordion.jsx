import React, { useState } from 'react'

const Accordion = () => {
    const [open , setOpen] = useState(false)

    const openAccordion = () => {
        setOpen(!open);
        
        const accordionTextList = document.querySelectorAll('.accordion_text');

        accordionTextList.forEach(accordionText => {
            accordionText.style.display = open ? 'none' : 'block';
        });
    };
    return (
        <div className='accordions'>
            <div className='faq-content'>
                <div onClick={openAccordion} className='accordion'>
                    <h5>Hans proqramlaşdırma dilini öyrənmək yaxşıdır?</h5>
                    <i className='fas fa-plus'></i>
                </div>
                <div className='accordion_text'>
                    <p className='accordion_paragraph' id='accordiontitle'>Adətən çoxlarına HTML və CSS öyrənməklə başlamağı, sonra JavaScript öyrənməyə keçməyi söyləyirəm. Bunun səbəbi, JavaScript -in hər yerdə istifadə edilməsidir: frontend, backend və hətta mobil tətbiqlər qurmaq üçün. Çox istifadə halları var, buna görə öyrənməyi ağıllı hesab edirəm.</p>
                </div>
            </div>

            <div className='faq-content'>
                <div onClick={openAccordion} className='accordion'>
                    <a href='#'>Həm qrafik dizayn, həm də kodlaşdırma etmək mümkündürmü ?</a>
                    <i className='fas fa-plus'></i>
                </div>
                <div className='accordion_text'>
                    <p className='accordion_paragraph'>Kodlaşdırma və qrafik dizaynla maraqlanırsınızsa, hər iki sahədə bacarıq öyrənməməyiniz lazım olduğunu söyləyəcək bir şey yoxdur. Çox vaxt əl-ələ verirlər, buna görə də hər iki sahədə bilik və bacarıqlara sahib olmaq müəyyən karyera yolları üçün arzu oluna bilər. Hazırda çox tələb olunan bir karyera olan UI dizaynı kimi bir şey ardınca getməyi də düşünə bilərsiniz!</p>
                </div>
            </div>

            <div className='faq-content'>
                <div onClick={openAccordion} className='accordion'>
                    <a href='#'>Proqramçıların hansı bacarıqlara ehtiyacı var?</a>
                    <i className='fas fa-plus'></i>
                </div>
                <div className='accordion_text'>
                    <p className='accordion_paragraph'>Bir proqramçı üçün ən vacib bacarıqlar bunlardır:
Riyazi bacarıqlar: Proqramlaşdırma üçün həm arifmetik, həm də cəbr haqqında əsas anlayış vacibdir.
Problemlərin həlli: Bir proqramçının əhəmiyyətli bir vaxtı proqram təminatı ilə əlaqədar müxtəlif problemlərin həllinə sərf olunur.
Ünsiyyət: Proqram inkişaf etdirmə işlərinin çoxu komanda səyidir, buna görə də proqramçıların digər komanda üzvləri ilə uğurla ünsiyyət qura bilmələri lazımdır.
Kompüter bacarıqları: Proqramçıların çoxu müntəzəm olaraq istifadə etdikləri proqramlaşdırma dillərindən əlavə olaraq kompüter bilikləri lazımdır.</p>
                </div>
            </div>

        </div>
    )
}

export default Accordion
