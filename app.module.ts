import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { SidebarComponent } from './private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './private/shared/topbar/topbar.component'; 
 import { ProjectsListComponent } from './private/projects-list/projects-list.component';
//importation des module //ReactiveFormsModule,FormsModule
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
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
import { HttpClientModule } from "@angular/common/http";
import { FicheProjetComponent } from './private/fiche-projet/fiche-projet.component';
import { UserInfoComponent } from './private/user-info/user-info.component';
import { UserUpdateComponent } from './private/user-update/user-update.component';
import { ProjectUpdateComponent } from './private/project-update/project-update.component';
import { FicheEditComponent } from './private/fiche-edit/fiche-edit.component';
import { CommunesAddComponent } from './private/communes-add/communes-add.component';
import { QuartiersAddComponent } from './private/quartiers-add/quartiers-add.component';
import { GouvernoratsAddComponent } from './private/gouvernorats-add/gouvernorats-add.component';
import { ProjectInfoComponent } from './private/project-info/project-info.component';
import { TunisAddComponent } from './private/tunis-add/tunis-add.component';
import { GeolocalisationComponent } from './private/geolocalisation/geolocalisation.component'; 
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { QuartierInfosComponent } from './private/quartier-infos/quartier-infos.component';
import { QuartierUpdateComponent } from './private/quartier-update/quartier-update.component';
import { TunisInfoComponent } from './private/tunis-info/tunis-info.component';
import { TunisUpdateComponent } from './private/tunis-update/tunis-update.component';
import { BailleursComponent } from './private/bailleurs/bailleurs.component';
import { SchemasFinComponent } from './private/schemas-fin/schemas-fin.component';

@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    DashboardComponent,
    SidebarComponent,
    TopbarComponent, 
    ProjectsListComponent,
    UserParamComponent,
    UserAddComponent,
    ProjectsIdentifyComponent,
    EligibiliteCriteresComponent,
    ProjectsAddComponent,
    GouvernoratsListComponent,
    CommunesListComponent,
    ProjetsTunisComponent,
    QuartiersListComponent,
    SigninComponent,
    FicheProjetComponent,
    UserInfoComponent,
    UserUpdateComponent, 
    ProjectUpdateComponent,
    FicheEditComponent, 
    CommunesAddComponent,
    QuartiersAddComponent,
    GouvernoratsAddComponent,
    ProjectInfoComponent,
    TunisAddComponent,
    GeolocalisationComponent,
    QuartierInfosComponent,
    QuartierUpdateComponent,
    TunisInfoComponent,
    TunisUpdateComponent,
    BailleursComponent,
    SchemasFinComponent 
 
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(), 
    AgmCoreModule.forRoot({
    apiKey:'AIzaSyC9SlBSpCFurLBWpe2TFAj-fDr6YCPJajc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
