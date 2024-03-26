import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./state/counter.reducer";

const routes: Routes = [
    {
        path: '',component: CounterComponent
    },
]

@NgModule({
    declarations: [
        CounterComponent,
        CounterOutputComponent,
        CounterButtonsComponent,
        CustomCounterInputComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('counter', counterReducer)
    ],
})

export class CounterModule {}