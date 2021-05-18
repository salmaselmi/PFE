import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
 
import { ProjectsListComponent } from './private/projects-list/projects-list.component';
import { UserParamComponent } from './private/user-param/user-param.component';
import { UserAddComponent } from './private/user-add/user-add.component'; 
import { ProjectsIdentifyComponent } from './private/projects-identify/projects-identify.component';
import { EligibiliteCriteresComponent } from './private/eligibilite-criteres/eligibilite-criteres.component';
import { ProjectsAddComponent } from './private/projects-add/projects-add.component';
import { GouvernoratsListComponent } from './private/gouvernorats-list/gouvernorats-list.component';
import { CommunesListComponent } from './private/communes-list/communes-list.component';
import { ProjetsTunisComponent } from './private/projets-tunis/projets-tunis.component';
import { QuartiersListComponent } from './private/quartiers-list/quartiers-list.component';
import { SigninComponent } from './private/signin/signin.component';
import { AuthGuard } from './guard/auth.guard';
import { FicheProjetComponent } from './private/fiche-projet/fiche-projet.component';
import { UserInfoComponent } from './private/user-info/user-info.component';
import { UserUpdateComponent } from './private/user-update/user-update.component';
import { ProjectUpdateComponent } from './private/project-update/project-update.component';
import { FicheEditComponent } from './private/fiche-edit/fiche-edit.component';
import { CommunesAddComponent } from './private/communes-add/communes-add.component';
import { GouvernoratsAddComponent } from './private/gouvernorats-add/gouvernorats-add.component';
import { QuartiersAddComponent } from './private/quartiers-add/quartiers-add.component';
import { ProjectInfoComponent } from './private/project-info/project-info.component';
import { TunisAddComponent } from './private/tunis-add/tunis-add.component';
import { GeolocalisationComponent } from './private/geolocalisation/geolocalisation.component';
import { QuartierInfosComponent } from './private/quartier-infos/quartier-infos.component';
import { QuartierUpdateComponent } from './private/quartier-update/quartier-update.component';
import { TunisInfoComponent } from './private/tunis-info/tunis-info.component'; 
import { TunisUpdateComponent } from './private/tunis-update/tunis-update.component';
import { BailleursComponent } from './private/bailleurs/bailleurs.component';
import { SchemasFinComponent } from './private/schemas-fin/schemas-fin.component';


const routes: Routes = [
  {
    path: "",
    /*redirectTo: "dashboard",
    pathMatch: "full"*/
    component: LandingPageComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
     
  {
    path: "projects/list",
    component: ProjectsListComponent
  },
 
  {
    path:"user/param",
    component: UserParamComponent
  },
  {
    path:"user/add",
    component: UserAddComponent
  },
  {
    path:"user/info/:id",
    component:UserInfoComponent
  },
  {
    path:"projects/identify",
    component:ProjectsIdentifyComponent
  },
  {
    path:"eligibilite/criteres",
    component:EligibiliteCriteresComponent
  },
  {
    path:"projects/add",
    component:ProjectsAddComponent
  },
  {
    path:"gouvernorats/list",
    component:GouvernoratsListComponent
  },
 
  {
    path:"communes/list",
    component:CommunesListComponent
  },
  {
    path:"projets/tunis",
    component:ProjetsTunisComponent
  },
  {
    path:"quartiers/list",
    component:QuartiersListComponent
  },
  {
    path:"signin",
    component:SigninComponent
  },
  {
    path:"fiche/projet/:id",
    component:FicheProjetComponent
  },
  {
    path:"user/update/:id",
    component:UserUpdateComponent
  },
  {
    path:"project/update/:id",
    component:ProjectUpdateComponent
  },
  {
    path:"fiche/edit",
    component:FicheEditComponent
  },
  
  {
    path:"communes/add",
    component:CommunesAddComponent
  },
  {
    path:"quartiers/add",
    component:QuartiersAddComponent
  },
  {
    path:"gouvernorats/add",
    component:GouvernoratsAddComponent
  },
  {
    path:"project/info/:id",
    component:ProjectInfoComponent
  },
  {
    path:"tunis/add",
    component:TunisAddComponent
  },
  {
    path:"geolocalisation",
    component:GeolocalisationComponent

  },
  {
    path:"quartier/infos/:id",
    component: QuartierInfosComponent
  },
  {
    path:"quartier/update/:id",
    component:QuartierUpdateComponent
  },
  {
    path:"tunis/info",
    component:TunisInfoComponent
  },
  {
    path:"tunis/update",
    component:TunisUpdateComponent
  },
  {
    path:"bailleurs",
    component:BailleursComponent
  },
  {
    path:"schemas/fin",
    component:SchemasFinComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }