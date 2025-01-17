import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter/counter.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        path: '',component: HomeComponent
    },
    {
        path: 'counter',component: CounterComponent
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}