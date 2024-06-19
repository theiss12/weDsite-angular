import { Routes } from '@angular/router';
import { Home } from './screens/Home/home.component';
import { Fotos } from './screens/Fotos/fotos.component';
import { Schedule } from './screens/Schedule/schedule.component';
import { Directions } from './screens/Directions/directions.component';
import { Gifts } from './screens/Gifts/gifts.component';
import { Receipt } from './components/Receipt/receipt.component';
import { RSVP } from './screens/RSVP/rsvp.component';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "home", component: Home},
    {path: "fotos", component: Fotos},
    {path: "schedule", component: Schedule},
    {path: "accomodation", component: Directions},
    {path: "gifts", component: Gifts},
    {path: "thanks", component: Receipt},
    {path: "rsvp", component: RSVP}
];
