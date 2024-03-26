import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter/counter.component";
import { NgModule } from "@angular/core";
import { PostListComponent } from "./post/post-list/post-list.component";
import { AddPostComponent } from "./post/add-post/add-post.component";
import { EditPostComponent } from "./post/edit-post/edit-post.component";

const routes: Routes = [
    {
        path: '',component: HomeComponent
    },
    {
        path: 'counter',
        loadChildren: () => import('./counter/counter.module').then((m)=>m.CounterModule)
    },
    {
        path: 'posts',
        loadChildren: () => import('./post/post.module').then((m)=>m.PostModule)
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