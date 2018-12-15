import { Routes } from '@angular/router';
import { NewUserComponent } from './new-user.component';
import { UpdateUserComponent } from './update-user.component';
import { DetailsUserComponent } from './details-user.component';

export const USER_ROUTES: Routes = [
    { path: 'new', component: NewUserComponent},
    { path: 'update', component: UpdateUserComponent},
    { path: 'details', component: DetailsUserComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'update' }
];
