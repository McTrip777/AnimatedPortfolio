import React from "react";
import moon from '../images/moon.png'
import '../styles/title.css'

const Title = () => {
  return (
    <div className="titleContainer">
      <div className="moon" />
      <img src={moon} className="moon moonOverlay" />
      <svg
        className="trees"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54.6 15.58"
      >
        <path
          fill="#020c11"
          d="M173.89,99.61l-1.89.25,0-.16.63-.46-.3,0-.79-3.62-.74,1.91.2.26-1.09.87.61,1.7-1.25-.5.33,1.51-1.7-.32,0-.23.86-.4-.76-.18.45-.68-.25,0-.39-1.74-1.19,1.62.5.46-.88,1.11V98.89l-.73.27.42-1.55-.79.2L166.39,96l-1.5.2.52-1.19-.53-.13.61-1.11c-1.65-.67-.8-2.35-1.55-3.52l-.72,3.19-.36,0,.49.94-1,.25.91.79-1.15-.2-.09.19.79.71-.65.13.43.65h-1.34l1.21,1-.7.46.17.89-.3,0V97.68l-.62-.14c.15-.62-.81-1.51.48-2l-1-.08.44-.83c-1.06-.64-1.06-.64-.23-1.58l-.89-.08c.1-.27.18-.5.28-.72s.22-.39.42-.75l-.95.22.25-1.18-.18.09-.5-2.1c-.73.44.48,1.74-1,1.66l.63,1.26-1,.24.71,1.09-.9.37c.3.55.6,1.11.94,1.72-.62.09-1,.36-.42,1l-.91-.21c.14.49.44.95.36,1.33-.16.75-.71.39-1.14.26l.56-1.23-.85.14-.16-.17,1.28-.73L157,95l-1,.12,1.09-.79-.23-.29-.54.09-.19-2.25-.82.89a1.1,1.1,0,0,1-.46,1.65l.83.92-1.25-.25.74,1.08-.81.22.09,1.61h-1.09l.6,2.65-.21.11-.89-.75.52-1-1.22.54.5-1.57-.79.37.18-1.6h-.46l-.3-2.88L150.46,96l-.16-.12.28,1-1-.12.83,1.33h-1.3l1.05,1-.77-.11.41.8-.75.27.14-1.49-.8.13.78-1.62-1,.28-.12-.22c.3-.26.63-.51.91-.79a2.06,2.06,0,0,0,.27-.51c-.19-.06-.42-.24-.55-.18-.85.38-.8-.06-.61-.65l-.65-.11,1.27-1-1.21.13L147.9,93h-.66l.4-.6-.29-.06V90.74l-.31,0-1,2c.73.54-.32.73-.54,1.17l.77.81h-1.4l.94,1.72-1.38.25.66.76-.66.25.55,1.1-.89.8.16-1-.85-.07.77-1.6-.7.42-.82-4.76-.15,0-.77,3.33a1.59,1.59,0,0,1-.45,1.71l-.33-1.91-.26,0,.6-.85-.9-.73L141,92.9c-1.72-.25-.45-.9.06-1.62L140,91.6l.11-1.26-.14.07-.28-1.29h-.28l-.23-1.89-.27,0L138,91l-1.14.25,1.09.84-.18.25-.73-.33-.11.74-.58,0,1.08,1.94h-1.86l1.27,1-.14.21-.8-.22-.15.14.92,1.11h-1.94l1.49,1.45-1.26.39.68,1.18H134.4l.37.91c.4,0,1,.21.72,1.17-.15.48,0,.75.58.71.13,0,.27,0,.4,0H188l1-1.41-1.11-.07.93-.69h-.49c0-.47,0-.9,0-1.33a2.08,2.08,0,0,0-.5-.05c.21-.33.64-.67-.19-.88-.27-.07-.5-.61-.6-1a7.1,7.1,0,0,1-.16-1.46l-.42,0-.57,3-.29,0-.19-1.32-.78-.07,1.1-.82-1.41-.27L186,95.22l-1-.07.34-1-.68-.55.25-1.5L184,88.9l-.79,2,.27.12-.6.37.34.57-1.05.33,1.2.45-1.38.46.68.6-.28,0,.17,1.13-1,.55.32-1.86-.37.16-.39-.69.94-.63-.09-.2-1.07.27.94-1-.08-.13-1.08.49.68-1h-.67c.33-.94-.06-1.76-.37-2.78l-.65,1.69-.82,0,.95.7-.77.32.59,1.16-1-.27L179.4,93l-1-.28c.38.71.23,1.56,1,2h-2.27l1,.82.09,1.7-1.45-.11,1.14,1.75h-1.15l.85,1.24-.16.18c-.19-.19-.47-.34-.56-.56-.18-.48-.48-1.09-.32-1.47.34-.83-.16-.79-.69-.85l.91-1c-.61,0-1.49.37-.73-.66-.87-.47.16-1.48-.59-2l-1.52,3.29.54.36-.06.23-1.13-.09.88,1.17h-.89Z"
          transform="translate(-134.4 -87.22)"
        />
        <path
          fill="#00090d"
          d="M149.51,99.61l1.89.25,0-.16-.63-.46.3,0,.79-3.62.74,1.91-.2.26,1.09.87-.61,1.7,1.25-.5-.33,1.51,1.7-.32,0-.23-.86-.4.76-.18-.45-.68.25,0,.39-1.74,1.19,1.62-.5.46.88,1.11V98.89l.73.27-.42-1.55.79.2L157,96l1.5.2L158,95l.53-.13-.61-1.11c1.65-.67.8-2.35,1.55-3.52l.72,3.19.36,0-.49.94,1,.25-.91.79,1.15-.2.09.19-.79.71.65.13-.43.65h1.34l-1.21,1,.7.46-.17.89.3,0V97.68l.62-.14c-.15-.62.82-1.51-.48-2l1-.08-.44-.83c1.06-.64,1.06-.64.23-1.58l.89-.08c-.1-.27-.18-.5-.28-.72s-.22-.39-.42-.75l.95.22-.25-1.18.18.09.5-2.1c.73.44-.48,1.74,1,1.66l-.63,1.26,1,.24-.71,1.09.9.37c-.3.55-.6,1.11-.94,1.72.62.09,1,.36.42,1l.91-.21c-.14.49-.44.95-.36,1.33.16.75.71.39,1.14.26l-.56-1.23.85.14.16-.17-1.28-.73.27-.35,1,.12-1.09-.79.23-.29.54.09.19-2.25.82.89a1.1,1.1,0,0,0,.46,1.65l-.83.92L169,95.1l-.74,1.08.81.22L169,98H170l-.6,2.65.21.11.89-.75L170,99l1.22.54-.5-1.57.79.37-.18-1.6h.46l.3-2.88.83,2.08.16-.12-.28,1,1-.12L173,98.1h1.3l-1,1L174,99l-.41.8.75.27-.14-1.49.8.13-.78-1.62,1,.28.12-.22c-.3-.26-.63-.51-.91-.79a2.06,2.06,0,0,1-.27-.51c.19-.06.42-.24.55-.18.85.38.8-.06.61-.65l.65-.11-1.27-1,1.21.13L175.5,93h.66l-.4-.6.29-.06V90.74l.31,0,1,2c-.73.54.32.73.54,1.17l-.77.81h1.4l-.94,1.72,1.38.25-.66.76.66.25-.55,1.1.89.8-.16-1,.85-.07-.77-1.6.7.42.82-4.76.15,0,.77,3.33a1.6,1.6,0,0,0,.45,1.71l.33-1.91.26,0-.6-.85.9-.73-.64-1.24c1.72-.25.45-.9-.06-1.62l1.05.32-.11-1.26.14.07.28-1.29H184l.23-1.89.27,0,.93,3.82,1.13.25-1.09.84.18.25.73-.33.11.74.58,0L186,94.78h1.86l-1.27,1,.14.21.8-.22.15.14L186.74,97h1.94l-1.49,1.45,1.26.39-.68,1.18H189l-.37.91c-.4,0-1,.21-.72,1.17.15.48,0,.75-.58.71-.13,0-.27,0-.4,0H135.39l-1-1.41,1.11-.07-.93-.69h.49c0-.47,0-.9,0-1.33a2.08,2.08,0,0,1,.5-.05c-.21-.33-.64-.67.19-.88.27-.07.5-.61.6-1a7.1,7.1,0,0,0,.16-1.46l.42,0,.57,3,.29,0L138,97.6l.78-.07-1.1-.82,1.41-.27-1.68-1.22,1-.07-.34-1,.68-.55-.25-1.5.91-3.17.79,2L140,91l.6.37-.34.57,1.05.33-1.2.45,1.38.46-.68.6.28,0-.17,1.13,1,.55-.32-1.86.37.16.39-.69-.94-.63.09-.2,1.07.27-.94-1,.08-.13,1.08.49-.68-1h.67c-.33-.94.06-1.76.37-2.78l.65,1.69.82,0-1,.7.77.32L143.82,92l1-.27L144,93l1-.28c-.38.71-.23,1.56-1,2h2.27l-1,.82-.09,1.7,1.45-.11-1.14,1.75h1.15l-.85,1.24.16.18c.19-.19.47-.34.56-.56.18-.48.48-1.09.32-1.47-.34-.83.16-.79.69-.85l-.91-1c.61,0,1.49.37.73-.66.87-.47-.16-1.48.59-2l1.52,3.29-.54.36.06.23,1.13-.09-.88,1.17h.89Z"
          transform="translate(-134.4 -87.22)"
        />
      </svg>
      <div className="titleWrap d-flex justify-content-center align-items-start flex-column">
        <h4 className="preTitle">Hi, my name is</h4>
        <h1 className="titleName">Jacob McFaul</h1>
        <h1 className="titleTitle">I am a Front End Developer.</h1>
        <h4>
          I am a motivated developer with experience creating custom front end
          websites. Looking to use my skills to make a difference and serve a
          greater purpose.
        </h4>
      </div>
    </div>
  );
};

export default Title;
