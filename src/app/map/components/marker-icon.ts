import L from 'leaflet'

/*Styles*/
const markerOutside = `
        position: absolute;
        background-color: #00adef;
        transform: rotate(45deg);
        width: 46px;
        height: 46px;
        margin: -30px 0 0 -15px;
        display: block;
        border-radius: 3rem 3rem 0;
        border: 3px solid #00adef;
      `

const markerInside = `
        width: 90%;
        height: 90%;
        transform: rotate(-45deg);
        border-radius: 3rem;
        background-size: cover;
        border: 2px solid #fff;
      `

export const mapIcon = L.divIcon({
  html: `
    <div style="${markerOutside}">
      <div style="${markerInside}"/>
    </div>
  `,
})
