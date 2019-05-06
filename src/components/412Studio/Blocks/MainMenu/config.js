import { loc } from "../../../../localization";
import { 
  MAIN412PAGE_APP_ENDPOINT,
  STAFF_APP_ENDPOINT,
  SCHEDULE_APP_ENDPOINT,
  STYLES_APP_ENDPOINT,
  CONTACTS_APP_ENDPOINT,
  GALLERY_APP_ENDPOINT
} from "../../../../constants";


export const nav = [
  {name: loc.main, link: MAIN412PAGE_APP_ENDPOINT},
  {name: loc.staff, link: STAFF_APP_ENDPOINT},
  {name: loc.schedule, link: SCHEDULE_APP_ENDPOINT},
  {name: loc.styles, link: STYLES_APP_ENDPOINT},
  {name: loc.contacts, link: CONTACTS_APP_ENDPOINT},
  {name: loc.gallery, link: GALLERY_APP_ENDPOINT} 
]