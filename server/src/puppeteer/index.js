import { TripModel } from '../models/trips/trip.model'

import puppeteer from 'puppeteer'

export const getCoordinate = async () => {
  const ACCEPT_BUTTON =
    '#qc-cmp2-ui > div.qc-cmp2-footer.qc-cmp2-footer-overlay.qc-cmp2-footer-scrolled > div > button.css-47sehv'
  const CURRENT_PORT_SELECTOR =
    '#vesselDetails_latestPositionSection > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-true.css-4d8ot5 > p:nth-child(4) > b > a'
  const COORDS_SELECTOR =
    '#vesselDetails_latestPositionSection > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-true.css-4d8ot5 > p:nth-child(5) > b > a'
  const DATE_TIME_SELECTOR =
    '#vesselDetails_latestPositionSection > div.MuiCollapse-root.MuiCollapse-vertical.MuiCollapse-entered.css-c4sutr > div > div > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-md-true.css-4d8ot5 > p:nth-child(1) > b'

  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  // viewport and device scale factor of my laptop
  await page.setViewport({ width: 2880, height: 1800, deviceScaleFactor: 2 })
  await page.goto(
    'https://www.marinetraffic.com/en/ais/details/ships/shipid:6599827/mmsi:247092400/imo:0/vessel:ELMOSFIRE',
  )
  await page.waitForSelector(ACCEPT_BUTTON)
  await page.click(ACCEPT_BUTTON)

  // Permet de recuperer un element par son selecteur (id) dans le document
  let port = await page.evaluate((sel) => {
    return document.querySelector(sel).textContent
  }, CURRENT_PORT_SELECTOR)

  let coords = await page.evaluate((sel) => {
    return document.querySelector(sel).textContent
  }, COORDS_SELECTOR)

  let dateTime = await page.evaluate((sel) => {
    return document.querySelector(sel).textContent
  }, DATE_TIME_SELECTOR)

  // Extractions et traitements des coordonnee
  const replaced = coords.replaceAll('°', '')
  const splited = replaced.split('/')
  const final = splited.map((coord) => parseFloat(coord.trim()))

  const boatInformations = {
    currentPort: port,
    coords: final,
    date: new Date(dateTime),
  }
  console.log(boatInformations)

  const newTrip = TripModel({
    country: 'Marseille',
  })
  console.log(newTrip)

  await browser.close()

  return boatInformations
}
