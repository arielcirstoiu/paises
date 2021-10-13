import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region', //nombre
        component: PorRegionComponent //componente a mostrar
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',  //redireccionar si ponen cualquier otra cosa
        redirectTo: '' // puede ser al 404Component en este caso a la principal
    }
]
@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule //exportarlo para usarlo fuera
    ]
})

export class AppRoutingModule{}