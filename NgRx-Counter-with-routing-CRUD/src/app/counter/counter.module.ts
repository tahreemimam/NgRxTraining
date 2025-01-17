import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter/counter.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { FormsModule } from "@angular/forms";

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
        RouterModule.forChild(routes)
    ],
})

export class CounterModule {}